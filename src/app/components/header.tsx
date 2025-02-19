import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
    return (
        <nav className={styles.header}>
            <Link href="/" className={styles.buttons}>Home</Link>
            <Link href="/beginner" className={styles.buttons}>Beginner tips</Link>
            <Link href="/collection" className={styles.buttons}>Collection</Link>
            <Link href="/colors" className={styles.buttons}>Colors</Link>
        </nav>
    );
}