import React from 'react'
import Link from "next/link";
import styles from "@/components/navbar.module.css";

function products() {
  return (
    <ul className={styles.ul}>
        <li>
           <Link href="/products/Apple">
                <p>Apple</p>
           </Link>
        </li>
        <li>
           <Link href="/products/Pineapple">
                <p>PineApple</p>
           </Link>
        </li>
    </ul>
  )
}

export default products
