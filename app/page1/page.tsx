import Link from "next/link";
import  styles  from "../page.module.css";

export default function page() {
  return (
    <div className={styles.page}>
      <h1>page1</h1>
      <Link href="/page2">page2へ</Link>
    </div>
  );
}
