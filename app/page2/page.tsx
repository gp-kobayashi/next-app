import Link from "next/link";
import  styles  from "../page.module.css";

export default function page() {
  return (
    <div className={styles.page}>
      <h1>page2</h1>
      <Link href="/todos">Todoへ</Link>
    </div>
  );
}
