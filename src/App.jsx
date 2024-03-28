import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItems from './components/TodoItems'
import { useEffect } from 'react';
import { setTodos } from './features/todo/todoSlice';



function App() {
  const todos = useSelector(state=> state.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')); 
    if(storedTodos && storedTodos.length > 0){
      dispatch(setTodos(storedTodos))
    }
  }, [dispatch]);
  return (
    <>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4"><TodoForm /></div>
          <div className="flex flex-wrap gap-y-3">
           {todos.map((todo)=> (
            <div key={todo.id} className="w-full"> 
              <TodoItems todo={todo} />
            </div>
           ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
