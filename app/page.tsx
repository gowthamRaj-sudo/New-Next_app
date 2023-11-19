import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import NavBar from './component/NavBar'
import Layout from './component/Layout'


export default function Home() {
  return (
    <main>
   
{/* <ul className={styles.navbar}>
  <li className={styles.liSelector}><Link href={'/create'}> create</Link></li>
  <li className={styles.liSelector}> <Link href={'/view'}>view </Link></li>
  <li className={styles.liSelector}> <Link href={'/edit'}>edit </Link></li>
  <li className={styles.liSelector}><Link href={'/delete'}>delete </Link></li>


</ul> */}
<Layout>
<h1 style={{textAlign:'center'}}>Crud Operations</h1>
</Layout>
  

    </main>
  )
}
