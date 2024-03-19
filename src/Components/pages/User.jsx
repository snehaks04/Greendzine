import { Card } from "../Card";
import { InputBox } from "../InputBox";
import { Logo } from "../Logo";
import { FilterAtom } from "../../store/atom/Filter";
import { useSetRecoilState, RecoilRoot } from "recoil";
import { useNavigate } from "react-router-dom";
// import axios from 'axios'

export function User(){
   return (
    <RecoilRoot>
        <Users></Users>
    </RecoilRoot>
   )
}
function Users(){
    const setFilterr=useSetRecoilState(FilterAtom)
    const navigate=useNavigate()
   
   return(   
  
        <div className="text-center h-full relative">
            
                <div className=" grid justify-end items-center  absolute right-10
                    top-5 "> <Logo  logo={"logo3"}/>
                 </div>
                 
            <div className="relative top-20">
                    <div className="grid justify-center m-5 relative">
                     <Logo logo={"logo2"} />
                        <div className="text-cgreen relative bottom-20 left-14 shadow-black shadow-lg  bg-gray-800 w-6 h-6 flex items-center justify-center p-3 rounded-full">4</div> 
                    </div>
                    <div className="flex justify-center items-center  ">
                        <div className="mt-1  w-max pl-3">
                             <InputBox type={"search"} placeholder={"Search with name"} name={"Search"} onChange={(e)=>{setFilterr(e.target.value)}}/>
                        </div>
        
                    </div>
                    <div  className="grid grid-col-3 h-auto w-screen  bg-black ">
                     <Card/>  
                     <div className="my-5 flex justify-center  h-fit">
                            <div className="   flex justify-center rounded-2xl w-fit  bb">
                                <div className=" px-20 btn  py-3 rounded-2xl " onClick={()=>{
                                navigate("/dashboard")}}>
                                    <svg  xmlns="http://www.w3.org/2000/svg" fill="#36A546" viewBox="0 0 24 24"  className="w-6 h-6">
                                    <path  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg>
                                </div>

                                <div  className="px-20 py-3 btn rounded-2xl " onClick={()=>{navigate("/User")}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#36A546" viewBox="0 0 24 24"   className="w-6 h-6">
                                        <path  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>
                                </div>
                            </div>
                        </div> 
                     </div>
                     
        
            </div>
        </div>
    )
}