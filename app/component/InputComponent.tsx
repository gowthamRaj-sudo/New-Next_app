'use client';
import React, { ChangeEvent } from 'react'

interface InputComponentProps{
  type:string,
  value:any,
  onChange:any,
  name:any
  label:string
  placeholder:string
  email:any,
  required:string
}
interface EventpropsTypes{
  event:any
}
const emailFormat= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const InputComponent :React.FC<InputComponentProps> = ({type,value,onChange,name,label,placeholder,email,required}) => {
  return (
    <div style={{padding:"15px"}}>
      <label style={{textAlign:"end",color:"#333",fontWeight:"600"}}> {label}</label><br/>
<input type={type} value={value} onChange={(e)=>{
  // const inputValue=e.target.value
 
  return onChange(e)
  
}} name={name} placeholder={placeholder}style={{ 
  // color: "#333",
  fontSize: '1.2rem',
	margin: "0 auto",
  padding: "1.1rem 1rem",
  borderRadius: "0.2rem",
  // backgroundColor: "#FAFAFA",
  width:" 90%",

  // borderBottom: "0.3rem solid transparent",
  transition:" all 0.3s"}}/>


{email&&!emailFormat.test(value) ?<p style={{color:"red",fontSize:"13px"}}>Invalid Email format</p>:""
}    </div>
  )
}

export default InputComponent