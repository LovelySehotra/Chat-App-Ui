import { login, signup } from "@/Redux/Slices/AuthSlice";
import victory from "@/assets/victory.svg"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

function Auth() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState("");

    const validateSignup =()=>{
        if(!email.length){
            toast.error("Email is required")
            return false
        }
        if(!password.length){
            toast.error("Password is required")
            return false
        }
        if(password!==confirmPassword){
            toast.error("Password and confirm password should be same");
            return false
        }
        return true

    }
    const handleLogin =async()=>{
        const res = await dispatch(login({email,password}))
       if(res.payload.user.profileSetup){
        navigate("/chat")
       }  else{
        navigate("/profile")
       }
    }
    const handleSignUp =async()=>{
        if(validateSignup()){
         const res = await dispatch(signup({email,password}))
         if(res.status ===201) {
            navigate("/profile")
         }
        }

    }
    return (
        <div className="h-[100vh] w-[100vw] flex items-center justify-center">
            <div className="h-[80vh] bg-white border-2 border-white text-opacity-90 shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid ">
                <div className="flex items-center justify-center flex-col">
                    <div className="flex items-center justify-center flex-col">
                        <div className="flex items-center justify-center ">
                            <h1 className="text-4xl font-bold md:text-6xl" >Welcome</h1>
                            <img src={victory} alt="victory emoji" className="h-[80px]" />
                        </div>
                        <p className="font-medium text-center">
                            Fill the detail to get Started this best chat app

                        </p>
                        <div className="flex items-center justify-center w-full">
                            <Tabs className="w-3/4" defaultValue="login">
                                <TabsList className="bg-transparent rounded-none w-full">
                                    <TabsTrigger value="login" className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300 ">Log In</TabsTrigger>
                                    <TabsTrigger value="signup" className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300 ">Sign Up</TabsTrigger>
                                </TabsList>
                                <TabsContent className=" flex flex-col gap-5 mt-10" value="login">

                                    <Input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="rounded-full p-6" />
                                    <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="rounded-full p-6" />
<Button className="rounded-full p-6" onClick={handleLogin} >LogIn</Button>
                                </TabsContent>
                                <TabsContent className=" flex flex-col gap-5 " value="signup">
                                    <Input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="rounded-full p-6"/>
                                    <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="rounded-full p-6" />
                                    <Input placeholder="Confirm Password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="rounded-full p-6" />
                                    <Button className="rounded-full p-6" onClick={handleSignUp} >SignUp</Button>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth
