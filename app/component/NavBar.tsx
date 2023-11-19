'use client';
import React, { useState } from 'react'
import styles from "..//page.module.css"
import Link from 'next/link'
const NavBar = () => {
  const[isHover,setIsHover]=useState(null)
  const[selectedLink,setSelecteLink]=useState(0)
  interface parameterType{
    index:any
  }
  const handleHoverOpen=(index:parameterType)=>{
    setIsHover(index.index)
  }
  const handleHoverClose=()=>{
    setIsHover(null)
  }
  interface LinkType{
  
    index:any
  }
  const handleSelectedLink=( index:LinkType)=>{
  
    setSelecteLink(index)
  }
  const menuItem=[
    {label:"Dashboard",link:"/"},
        {label:"Create Users",link:"/create"},
    {label:"View Users",link:"/view"},
    {label:"Edit Users",link:"/edit"},
    {label:"Delete Users",link:"/delete"},

  ]
  console.log(selectedLink)
  return (
    <div style={{width:"20%",background:"#3F3F46",height:"100vh",textAlign:"center"}}>
<ul style={{paddingTop:"29%",color:"white"}}>
{menuItem.map((item,index)=>(
  <li  style={{padding:"8%",background:(isHover===index||selectedLink===index)?"#71717a":"",transition:"1s"}} key={index} onMouseEnter={()=>handleHoverOpen({index})} onMouseLeave={handleHoverClose} onClick={()=>handleSelectedLink( index)}><Link href={item.link}>{item.label}</Link></li>
))  
}
</ul>
    </div>
  )
}
export default NavBar