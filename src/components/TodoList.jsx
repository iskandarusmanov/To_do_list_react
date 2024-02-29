import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, editTodo, deleteTodo } from "../redux/todoSlice";

export default function TodoList() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  console.log("todos,", todos)

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleEdit = (id, text) => {
    const newText = prompt("Edit Todo:", text);
    if (newText) {
      dispatch(editTodo({ id, text: newText }));
    }
  };

  const handleDelete = (id) => {
      dispatch(deleteTodo(id));
  };

  return (
    <div className="flex-row mt-[30px] items-center">
      {todos?.map((todo) => (
        <div
          key={todo.id}
          className="flex justify-between p-3 px-5 rounded-md w-full m-auto mt-4 border-[2px] bg-gray-100"
        >
          <span className="font-medium p-0">{todo.text}</span>
          <div className="flex gap-2">
            <input
            className="cursor-pointer"
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(todo.id)}
            />
            <button onClick={() => handleEdit(todo.id, todo.text)} 
            className="border-blue-800 border rounded px-2 text-blue-800 text-[20px]"
            >
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <button
            onClick={() => handleDelete(todo.id)}
            className="border-red-500 border rounded px-2 text-red-500 text-[20px]"
            >
             <i className="fa-solid fa-trash"></i> 
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
