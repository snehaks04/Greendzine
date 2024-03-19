export function InputBox({type,placeholder,name,onChange}){
    return (
        <>
            
            <input className="w-full m-2 pl-2 box py-1 mb-5 rounded-lg focus:outline-none text-white" type={type} placeholder={placeholder} id={name} onChange={onChange}/>
        </>
    )
}