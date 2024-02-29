import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

export default function TodoForm() {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo.trim()));
      setNewTodo("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-fit m-auto">
      <input
        className=" border-[2px] border-r-0 w-[300px] border-gray-300 p-2 rounded-md rounded-br-none rounded-tr-none focus:outline-none focus:border-blue-500"
        type="text"
        placeholder="Add to do"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button
        className="bg-blue-700 border-blue-700 text-white p-[9px] rounded-md rounded-bl-none rounded-tl-none px-4 font-semibold"
        type="submit"
      >
        Add Todo
      </button>
    </form>
  );
}
