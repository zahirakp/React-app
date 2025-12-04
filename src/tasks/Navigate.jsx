
import { useNavigate } from 'react-router-dom'

function Navigate() {

    let Navigate=useNavigate()
  return (
    <>
    
    <h1>navigate</h1>
    <button onClick={()=>{Navigate("/")}}>home</button> 
    <button  onClick={()=>{Navigate("/about")}}>about</button>
    <button  onClick={()=>{Navigate("/contact")}}>contact</button>
    
    </>
  )
}

export default Navigate