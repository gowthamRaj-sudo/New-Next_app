
import React from 'react'
import NavBar from './NavBar'
import { Avatar } from '@nextui-org/react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface layoutProps{
    children:any
}

const Layout:React.FC<layoutProps> = ({children}) => {
  return (<>
    <div style={{display:"flex",position:"relative"}}>
<NavBar/>
<div style={{height:"80px",width:"100%"}}>
<div style={{display:"flex",justifyContent:"end",alignItems:"center",padding:"15px"}}>
  <img src="https://i.pravatar.cc/50?u=a042581f4e29026024d" style={{borderRadius:"50%"}}/>
</div>

</div>

    </div>
    <div style={{position:"absolute",top:"15%",left:"20%"}}>
    <main>
    {children}
     <ToastContainer

   />
</main>
</div>
    </>
  )
}

export default Layout