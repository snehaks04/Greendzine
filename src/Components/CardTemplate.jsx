export function CardTemplate({id,naam,dob,role}){
    return(
        <div  className="py-7  px-3 pl-10 text-left bg-gray-900   relative leading-8 grid justify-left m-3 shadow-gray-800 shadow-md odd:ml-0  even:mr-0  ">
            <div className="absolute right-10 top-2 w-7 h-7 rounded-full shadow-sm shadow-slate-600 flex justify-center items-center">{id}</div>
            
            <p>ID : {id}</p>
            <p>Name : {naam}</p>
            <p>DOB : <span className="text-o"> {dob}</span></p>
            <p>Role: <span className="text-cgreen"> {role}</span></p>
        </div>
    )
}