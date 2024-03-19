import { Logo } from "../Logo"
import { Buttons } from "../Buttons"
export function Landing(){
    return(
      <div className=" h-dvh relative flex flex-col items-center justify-center border-2 border-white  ">
        
        <div className="absolute top-36 shadow-slate-200 shadow-sm rounded-full "><Logo logo={"logo"}/></div>
    
    <div className="flex ">
      
      <div className=" mr-3  bg-cgreen px-10 py-3 rounded-3xl">
       <Buttons title={"Signup"}/></div>
      <div className=" bg-darkg px-10 py-3 rounded-3xl">
       <Buttons title={"Signin"}/></div>
       
      </div></div>
    )
}