import { Logo } from "../Logo";
import { InputBox } from "../InputBox";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import {  useSetRecoilState, useRecoilValue } from "recoil";
import {User,Pass,Newpass} from '../../store/atom/SignUp'

export function Signup(){
const setUsername=useSetRecoilState(User);
   const setPassword=useSetRecoilState(Pass);
   const setNewPass=useSetRecoilState(Newpass)
   const NewPass=useRecoilValue(Newpass)
   const Password=useRecoilValue(Pass)
   const Username=useRecoilValue(User)
  const p=useMemo(()=>{
    let passed=false;
    if(Password!="" && NewPass!=""){
        if(Password===NewPass){
            passed=true;
        }
    }
    return passed;
  },[NewPass,Password])
   
   const navigate=useNavigate()
    return(
        <div className="h-dvh grid place-items-center">
        <div className="">
            <div className="flex justify-center "><Logo logo={"logo"}/></div> 
            <div className="textt text-center  ">We Are Electric</div>
            <div className="mt-10 ">
               
                <div ><InputBox type={"text"} placeholder={"Username"} name={"Username"} onChange={(e)=>setUsername(e.target.value)}/></div>
               
                <div> <InputBox type={"password"} placeholder={"Password"} name={"Password"} onChange={(e)=>setPassword(e.target.value)}/></div>
                <div><InputBox type={"password"} placeholder={"Confirm Password"} name={"Confirm password"} onChange={(e)=>setNewPass(e.target.value)}/></div>
              
                <div className="mt-4 ml-3 text-center p-1 login rounded-3xl">
    <button onClick={() => {
        p ? navigate('/Signin') : navigate("/Signup");
    }}>
        Signup
    </button>
  
</div>

                <div className="flex justify-center mt-3">
                    <p className="text-gray-500">Already have an account?</p> 
                    <div className="ml-3" onClick={()=>{navigate('/Signin')}}>Signin</div>
                </div>
    </div>
    </div>
    </div>
       
    )
}


