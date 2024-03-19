export function ProgressBar({title,value}){
    return (
        <div>
            <div className=" w-fit  ">
            <div className=" text-white z-1 btext-left m-1"> <label htmlFor="{title}">{title}</label></div>
         
            <div className="flex justify-center  m-2">
                <div className="flex items-center justify-start "> 
                <progress className="h-2  rounded-xl" value={value}  max={150} />
                </div>
       
           <div className="text-cgreen ml-3">{value}%</div>
           </div>
           </div>
        </div>
    )
    }