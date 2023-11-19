'use client';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import Layout from '../component/Layout'
import { instance } from '../api'
import style from "../edit/page.module.css"
import InputComponent from '../component/InputComponent';
import { toast } from 'react-toastify';

const page = () => {
  const [getAllUsers,setGetAllUsers]=useState([])
const[userKey,setUserKey]=useState([])
const[modalOpen,setModalOpen]=useState(false)
const fetchgetAllUserDetails=async()=>{
  try{
    const response=await instance.get(`/users/getAllUsers`)
    if(response.status===200){
setGetAllUsers(response.data)
const seprateKeys=Object.keys(response.data[0])

setUserKey(seprateKeys)
    }

  }catch(e){
    console.log(e)
  }
}
useEffect(()=>{
fetchgetAllUserDetails()
},[])
interface paramsType{
  value:any
}
const handleSelectedUserDetails=(data:paramsType)=>{
  setModalOpen(data)
}
const handleInputChange=(event:ChangeEvent<HTMLInputElement>)=>{
  const {name,value}=event.target;
  setModalOpen({...modalOpen,[name]:value})
}
// console.log(modalOpen)
const updateSelectedUserDetails=async()=>{
  try{
const response=await instance.put(`/users/updateSelectedId?userId=${modalOpen._id}`,modalOpen)
if(response.status===200){
  setModalOpen(false)
  fetchgetAllUserDetails()
  toast.success("Updated Successfully !",{
     position:toast.POSITION.TOP_CENTER
  })

}
  }catch(e){
    console.log(e)
     toast.error("Something went to wrong !",{
     position:toast.POSITION.TOP_CENTER
  })
  }
}

  return (
    <Layout>  
  <h3 style={{textAlign:"center",transform:"translateX(30%)",padding:"15px"}}>Update User Details</h3>
        <table style={{background:"white",boxShadow:" rgba(0, 0, 0, 0.16) 0px 1px 4px",transform:"translateX(30%)",width:"100%"}}>
        <thead>
            <tr >
           {userKey.slice(1,5).map((e,i)=>(<td  key={i} style={{padding:"15px",textAlign:"center",background:"#F2EAFA",fontWeight:"700"}}>{e.charAt(0).toUpperCase() + e.slice(1)}</td>  ))}
           <td style={{padding:"15px",textAlign:"center",background:"#F2EAFA",fontWeight:"700"}}> Action</td> 
             </tr>
             {/* <tr></tr> */}
        </thead>
        <tbody>
          {getAllUsers.slice(1,8).map((value,index)=>(
            <tr key={index}>
           {userKey.slice(1,5).map((keys,keyIndex)=>(
            <td style={{padding:"15px",textAlign:"center",borderBottom:"1px  solid #E4E4E7",background:index%2===0?"white":"#F4F4F5"}}>{value[keys]}</td>
           )) }
             <td style={{padding:"15px",textAlign:"center",borderBottom:"1px  solid #E4E4E7",background:index%2===0?"white":"#F4F4F5"}}> <button className={style.button} onClick={()=>handleSelectedUserDetails(value)}>Edit</button></td>    
          </tr>
          ))}
        </tbody>
      </table>
      {/* Modal */}
   { modalOpen&&<div style={{background:"white",boxShadow:" rgba(0, 0, 0, 0.16) 0px 1px 4px",width:"80%",height:"65vh",position:"absolute",transform:'translate(50%,50%)',left:"10%",top:"-50%",borderRadius:"8px"}}>
<h2 style={{textAlign:"center",padding:"1%"}}>Update</h2>
<div style={{paddingLeft:"3rem"}}><InputComponent placeholder='UserName' value={modalOpen.name} onChange={handleInputChange} name={"name"}/>
<InputComponent placeholder='Email' value={modalOpen.password} onChange={handleInputChange} name={"password"}/>
<InputComponent placeholder='FatherName' value={modalOpen.fatherName} onChange={handleInputChange} name={"fatherName"}/>
<InputComponent placeholder='MotherName' value={modalOpen.motherName} onChange={handleInputChange} name={"motherName"}/>
<div style={{paddingRight:"4rem",display:"flex",justifyContent:"space-between"}}> <button className={style.button} onClick={()=>setModalOpen(false)}>Close</button>
<button className={style.button} onClick={updateSelectedUserDetails}>Update</button></div>
</div>
    </div>}
     </Layout>
   
  )
}

export default page