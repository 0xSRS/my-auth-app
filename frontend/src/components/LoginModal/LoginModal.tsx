import Button from "../Button/Button";
import CloseIcon from "../Icons/CloseIcon";
import { useRef } from "react";
import Input from "../Input/Input";
import axios from "axios";

interface LoginModalProps {
    isOpen: boolean,
    onClose: () => void
}


const LoginModal = (props: LoginModalProps) => {

    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const handleLogin = async () => {

        try {
            const response = await axios.post("http://localhost:3000/api/auth/v1/login", {
                email: emailRef.current?.value,
                password: passwordRef.current?.value
            })

            alert(response.data.msg)
            localStorage.setItem("token",response.data.token)
            props.onClose()
        }catch(e:any){
            alert("Something went wrong")
        }
    }

    if (!props.isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/60 backdrop-blur-md">
            <div className="bg-white/70 rounded-4xl relative p-4 flex flex-col">
                <div className="flex justify-between">
                    <p className="text-2xl font-bold">Login</p>
                    <CloseIcon onClick={props.onClose} />
                </div>
                <div className="flex flex-col gap-4">
                    <Input placeholder="Enter your email" type="email" reference={emailRef} />
                    <Input placeholder="Enter your password" type="password" reference={passwordRef} />
                </div>
                <div className="flex justify-center"><Button varient="primary" text="Login" onClick={handleLogin} /></div>
            </div>
        </div>
    )
}

export default LoginModal