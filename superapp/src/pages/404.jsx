import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
  return (
    <div>
        404 page
        <button onClick={()=>{navigate("/")}}>Go Back</button>
    </div>
  )
}

export default NotFound;