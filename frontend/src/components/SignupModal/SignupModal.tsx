import { useRef } from "react"
import Button from "../Button/Button"
import Input from "../Input/Input"
import CloseIcon from "../Icons/CloseIcon"
import axios from "axios"

interface SignupModalProps {
    isOpen: boolean,
    onClose: () => void
}



const SignupModal = (props: SignupModalProps) => {
    const nameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)

    const handleSignup = async () => {
        try {
            const response = await axios.post("http://localhost:3000/api/auth/v1/signup", {
                name: nameRef.current?.value,
                email: emailRef.current?.value,
                password: passwordRef.current?.value,
            });
            alert(response.data.msg);
            props.onClose();
        } catch (error: any) {
            // 4. If the backend sends an error (like "User already exists")
            alert(error.response?.data?.msg || "Something went wrong");
        }
    }

    if (!props.isOpen) return null
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-md">
            <div className="bg-white/70 rounded-4xl relative p-4">
                <div className="flex flex-col">
                    <div className="flex justify-between">
                        <p className="text-2xl font-bold">Create Account</p>
                        <CloseIcon onClick={props.onClose} />
                    </div>
                    <div className="flex flex-col gap-4">
                        <Input type="email" placeholder="Enter your email" reference={emailRef} />
                        <Input type="text" placeholder="Enter your name" reference={nameRef} />
                        <Input type="password" placeholder="Enter your password" reference={passwordRef} />
                    </div>
                    <div className="flex justify-center"><Button onClick={handleSignup} varient="primary" text="Sign Up" /></div>
                </div>
            </div>
        </div>
    )
}

export default SignupModal