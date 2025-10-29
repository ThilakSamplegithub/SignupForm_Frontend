import { useState } from "react"
import validatePassword from "../utils/validatePassword"

const useInput=(intialValue,name)=>{
    const[color,setColor]=useState('red')
    const [value,setValue]=useState(intialValue)
    const [message, setMessage] = useState("");
function handleChange(e){
    if(name==='email'){
       const lowerCaseEmail=e.target.value.toLowerCase()
        setValue(lowerCaseEmail)
    }else{
        setValue(e.target.value)
    }
   if(name==='password'){
           const result=validatePassword(e.target.value)
           console.log(result,'is result');
           const {message,color}=result
           setMessage(message)
           setColor(color)
       }
}
function reset() {
  setValue("");
  setMessage("");
}


return {
    value,
    handleChange,
    message,
    color,
    reset
}

}
export default useInput