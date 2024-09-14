import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Protected(props){
  const {component} = props
  const navigate = useNavigate();

  useEffect(() =>{
    let login = localStorage.getItem('ProfileLogin');
    if(!login)
    {
      navigate('/createaccount')
    }
  })

  return(
    <div>
      <component/>
    </div>
  )
}
export default Protected
