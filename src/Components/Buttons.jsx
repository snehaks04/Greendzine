import { useNavigate } from "react-router-dom"
export function Buttons({title}){
const navigate = useNavigate();
    return (
        <div onClick={()=>navigate(`/${title}`)}>
            <button>{title}</button>
        </div>
    )
}