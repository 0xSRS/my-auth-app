import { useState } from "react"
import Button from "../Button/Button"
import SignupModal from "../SignupModal/SignupModal"
import LoginModal from "../LoginModal/LoginModal"

const Navbar = () => {

    const [isSignupModalOpen, setIsSignupModalOpen] = useState(false)
    const [isLoginModalOpen , setIsLoginModalOpen] = useState(false)

    return (
        <div className="flex justify-around items-center border-b-2 border-gray-300 p-3 bg-">
            <div className="font-medium text-3xl">
                LOGO
            </div>
            <div className="flex justify-around gap-10 ">
                <p className="font-medium text-gray-600 hover:text-gray-800 transition-all duration-300">About Us</p>
                <p className="font-medium text-gray-600 hover:text-gray-800 transition-all duration-300">Pricing</p>
                <p className="font-medium text-gray-600 hover:text-gray-800 transition-all duration-300">Know more</p>
            </div>
            <div className="flex gap-2 items-center">
                <Button varient="primary" text="Sign Up" onClick={()=>{setIsSignupModalOpen(true)}}/>
                <Button varient="secondary" text="Login" onClick={()=> {setIsLoginModalOpen(true)}}/>
            </div>
            <SignupModal isOpen={isSignupModalOpen} onClose={()=>{setIsSignupModalOpen(false)}}/>
            <LoginModal isOpen={isLoginModalOpen} onClose={()=>{setIsLoginModalOpen(false)}} />
        </div>
    )
}

export default Navbar