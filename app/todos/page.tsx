import Link from "next/link";
import  styles  from "../page.module.css";


type Todo = {
    title: string;
}

async function getData() {
    const res = await fetch("http://localhost:3000/api/todos",{
      next:{
        revalidate: 10,
      }
    });
    return res.json()
}

export default async function page() {

    const todos: Todo[] = await getData();

  return (
    <div className={styles.page}>
      <h1>Todos</h1>
      {todos.map((todo) => (
        <div>{todo.title}</div>
      ))}
      <Link href="/">Home</Link>
    </div>
  );
}
