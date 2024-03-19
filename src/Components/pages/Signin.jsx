import { Logo } from "../Logo";
import { InputBox } from "../InputBox";
import {useNavigate} from "react-router-dom"
import { RecoilRoot, useRecoilValue} from "recoil";
import {User,Pass} from '../../store/atom/SignUp'
import { useMemo,useEffect,useState} from "react";

export function Signin(){
    const [ suser,setSuser] = useState('');
      const [spass,setSpass]= useState('');
       
        const Username= useRecoilValue(User)
        const Passwords= useRecoilValue(Pass)
   
 
    console.log("Username Signup :", Username); 
    console.log("Password  Singnup:", Passwords);
        
        console.log("Entered username signin:", suser); 
        console.log("Entered password signin :", spass)
        
      const s=useMemo(()=>{
        let passed=false;
        if (suser === Username && spass === Passwords) {
          passed=true
          // Navigate to the dashboard or perform other actions
        } 
return passed;
      },[Username,suser,Passwords,spass])  
     

    let navigate = useNavigate();
    return(
          <div className="h-dvh grid place-items-center">
            <div >
                {Username}
                {Passwords}
                <div className="flex justify-center "><Logo logo={"logo"}/></div> 
                <div className="textt text-center  ">We Are Electric</div>
                <div className="mt-10 ">
                    <div><InputBox type={"text"} placeholder={"Username"} name={"Username"} onChange={(e) => setSuser(e.target.value)}/></div>
                 
                    <div><InputBox type={"password"} placeholder={"Password"} name={"Password"} onChange={(e) => setSpass(e.target.value)}/></div>
                    <div className="mt-4 ml-3 text-center p-1 login rounded-3xl">
                    <button onClick={() => {s?(navigate("/dashboard")) : navigate("/Signin")}}>
        Signin
    </button>
</div>

                    <div className="flex justify-center mt-3">
                        <p className="text-gray-500">Don't have an account?</p> 
                        <div className="ml-3" onClick={() => {navigate('/Signup')}}>Signup</div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}
