import React from 'react'
import Link from "next/link";
import styles from "@/components/navbar.module.css";


const page = () => {
  return (
    <ul className={styles.ul}>
    <li>
       <Link href="/order/recent">
            <p>recentorders</p>
       </Link>
    </li>
    <li>
       <Link href="/order/veryfar">
            <p>veryfar</p>
       </Link>
    </li>
</ul>
  )
}

export default page