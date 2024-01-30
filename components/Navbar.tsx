import Link from "next/link";
import styles from "./navbar.module.css";
const Navbar = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <p>Next.js</p>
        <ul className={styles.links}>
          <Link href="/">
            <li>Home 🏠 </li>
          </Link>
          <Link href="/products">
            <li>products 🐶 </li>
          </Link>
          <Link href="/cart">
            <li>cart 💋 </li>
          </Link>
          <Link href="/checkout">
            <li>Checkout 🛒 </li>
            </Link>
            <Link href="/order">
            <li>Order 📦 </li>
            </Link>
            <Link href="/login">
              <li> Login </li>
              </Link>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
