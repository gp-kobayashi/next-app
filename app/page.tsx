import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Hello nextjs</h1>
      <Link href="/page1">page1へ</Link>
    </div>
  );
}
