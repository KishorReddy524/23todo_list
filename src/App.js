import "./styles.css";
import { useState, useEffect } from "react";
export default function App() {
  const [item, setItem] = useState("");
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("todos"));
    if (items) {
      setTodo(items);
    }
  }, []);
  console.log(todo);
  const handelClick = () => {
    if (item.length > 0) {
      setTodo([...todo, item]);
      localStorage.setItem("todos", JSON.stringify([...todo, item]));
      setItem("");
      console.log(todo);
    }
  };
  const handelDelete = (id) => {
    const kish = todo.filter((item) => {
      return item !== id;
    });
    setTodo(kish);
    localStorage.setItem("todos", JSON.stringify(kish));
  };
  return (
    <div className="App">
      <h1>Hello Todo</h1>
      <input
        placeholder="Enter hear"
        onChange={(e) => {
          setItem(e.target.value);
        }}
        value={item}
        id={item}
      />
      <button onClick={handelClick}>add</button>

      <ul>
        {todo.map((todo) => (
          <li key={todo}>
            {todo}
            <button onClick={() => handelDelete(todo)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
