'use client'
import React, { ChangeEvent, useEffect, useId, useState } from 'react'
import createStyle from "./page.module.css"
import InputComponent from '../component/InputComponent'
import { create } from 'domain'
import Layout from '../component/Layout'
import { instance } from '../api'
import { toast } from 'react-toastify'


const page = () => {
  interface createUserData{
 
    name:string,
    password:any,
    fatherName:string,
    motherName:string
  }
//  const createId=useId()
  const[CreateData,setCreateData]=useState <createUserData>({
  
    name:"",
    password:'',
    fatherName:'',
    motherName:''
  })
 const handleChange=( e: ChangeEvent<HTMLInputElement> )=>{
const{value,name}=e.target
  setCreateData({...CreateData,[name]:value})
 }
 
  const PostUsersDetails=async()=>{
    try{
const response=await instance.post(`/users/createUsers`,CreateData)
if(response.status===200){ 
//  console.log("Users Created successfully !")
toast("Created Succesfully !",{
  position:toast.POSITION.TOP_CENTER
})
 
}
    }catch(e){
      console.log(e)
      toast.error("Something went to Wrong !",{
        position:toast.POSITION.TOP_CENTER
      })
    }
  }
 


  return (
    <>
      <Layout>
        {/* <ul>{state?.map((e,i)=><li >{e.name}</li>)}</ul> */}
        <div
          style={{
            background: "white",
            boxShadow: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
          }}
        >
          <h3 style={{ padding: "15px", textAlign: "center" }}>CREAT USERS</h3>

          <div className={createStyle.inputSection}>
            <InputComponent
              label="UserName"
              type="text"
              value={CreateData.name}
              onChange={handleChange}
              name={"name"}
              placeholder="Enter the UserName"
            />
            <InputComponent
              label="Email"
              type="text"
              value={CreateData.password}
              onChange={handleChange}
              name={"password"}
              placeholder="Enter the Email"
              email
            />
            <InputComponent
              label="FatherName"
              type="text"
              value={CreateData.fatherName}
              onChange={handleChange}
              name={"fatherName"}
              placeholder="Enter the FatherName"
            />
            <InputComponent
              label="MotherName"
              type="text"
              value={CreateData.motherName}
              onChange={handleChange}
              name={"motherName"}
              placeholder="Enter the MotherName"
            />
          </div>
          <div style={{ padding: "15px" }}>
            <button onClick={PostUsersDetails} className={createStyle.button}>
              Create
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default page