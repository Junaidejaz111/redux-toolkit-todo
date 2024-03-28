import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
      dispatch(addTodo(todo))
      setTodo("")
  };
  useEffect(() => {
    if (todos && todos.length > 0) 
    localStorage.setItem('todos', JSON.stringify(todos)); 
  }, [todos]);
  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
