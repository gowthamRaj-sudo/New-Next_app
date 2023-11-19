'use client';
import React, { useEffect, useState } from 'react'
import Layout from '../component/Layout'
import { instance } from '../api'

const page = () => {
const [getAllUsers,setGetAllUsers]=useState([])
const[userKey,setUserKey]=useState([])
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
console.log(getAllUsers)
  return (
    <Layout>

  <h3 style={{textAlign:"center",transform:"translateX(50%)",padding:"15px"}}>View User Details</h3>
       <div style={{background:"white",boxShadow:" rgba(0, 0, 0, 0.16) 0px 1px 4px",transform:"translateX(50%)",width:"100%"}}>

    <table>
        <thead>
            <tr >
           {userKey.slice(1,5).map((e,i)=>(<td  key={i} style={{padding:"15px",textAlign:"center",background:"#F2EAFA",fontWeight:"700"}}>{e.charAt(0).toUpperCase() + e.slice(1)}</td>  ))}
             </tr>
        </thead>
        <tbody>
          {getAllUsers.slice(1,8).map((value,index)=>(
            <tr key={index}>
           {userKey.slice(1,5).map((keys,keyIndex)=>(
            <td style={{padding:"15px",textAlign:"center",borderBottom:"1px  solid #E4E4E7",background:index%2===0?"white":"#F4F4F5"}}>{value[keys]}</td>
           )) }
          </tr>
          ))}
        </tbody>
      </table></div>
      
    
      
      
      
      
    </Layout>
   
  )
}

export default page