'use client';
import React, { useEffect, useState } from 'react'
import Layout from '../component/Layout'
import { instance } from '../api';
import style from '../delete/page.module.css'
import { toast } from 'react-toastify';

const page = () => {
   const [getAllUsers,setGetAllUsers]=useState([])
const [userKey, setUserKey] = useState<string[]>([]);
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
interface selectedId{
  id:any
}
const handleOpen = (id: selectedId) => setModalOpen(id.id);
const handleClose=()=>setModalOpen(false)
const deleteSelectedUser=async()=>{
  try{
    const response=await instance.delete(`/users/deleteSelectedUser?userId=${modalOpen}`)
    if(response.status===200){
      fetchgetAllUserDetails()
      toast.success("User Deleted Successfully",{ position:toast.POSITION.TOP_CENTER})
      setModalOpen(false)
    }
  }catch(e){
    console.log(e)
 toast.error("User Deleted Successfully",{ position:toast.POSITION.TOP_CENTER})
  }
}


  return (
    <Layout>
      <h3
        style={{
          textAlign: "center",
          transform: "translateX(30%)",
          padding: "15px",
        }}
      >
        Update User Details
      </h3>
      <table
        style={{
          background: "white",
          boxShadow: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
          transform: "translateX(30%)",
          width: "100%",
        }}
      >
        <thead>
          <tr>
            {userKey.slice(1, 5).map((e, i) => (
              <td
                key={i}
                style={{
                  padding: "15px",
                  textAlign: "center",
                  background: "#F2EAFA",
                  fontWeight: "700",
                }}
              >
                {e.charAt(0).toUpperCase() + e.slice(1)}
              </td>
            ))}
            <td
              style={{
                padding: "15px",
                textAlign: "center",
                background: "#F2EAFA",
                fontWeight: "700",
              }}
            >
              {" "}
              Action
            </td>
          </tr>
          {/* <tr></tr> */}
        </thead>
        <tbody>
          {getAllUsers
            .slice(1, 8)
            .map((value: { _id: string; [key: string]: any }, index) => (
              <tr key={index}>
                {userKey.slice(1, 5).map((keys, keyIndex) => (
                  <td
                    style={{
                      padding: "15px",
                      textAlign: "center",
                      borderBottom: "1px  solid #E4E4E7",
                      background: index % 2 === 0 ? "white" : "#F4F4F5",
                    }}
                  >
                    {value[keys]}
                  </td>
                ))}
                <td
                  style={{
                    padding: "15px",
                    textAlign: "center",
                    borderBottom: "1px  solid #E4E4E7",
                    background: index % 2 === 0 ? "white" : "#F4F4F5",
                  }}
                >
                  {" "}
                  <button
                    className={style.button}
                    onClick={() => handleOpen({ id: value._id })}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {modalOpen && (
        <div
          style={{
            background: "white",
            boxShadow: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
            width: "380px",
            height: "30%",
            position: "absolute",
            transform: "translate(50%,50%)",
            left: "30%",
            top: "30%",
            borderRadius: "8px",
          }}
        >
          <h3 style={{ textAlign: "center", padding: "10px" }}>Confirmation</h3>
          <p style={{ textAlign: "center", padding: "15px" }}>
            Are you sure want to delete this user ?
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              padding: "15px",
            }}
          >
            <button className={style.button} onClick={handleClose}>
              Close
            </button>
            <button className={style.button} onClick={deleteSelectedUser}>
              Delete
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default page 