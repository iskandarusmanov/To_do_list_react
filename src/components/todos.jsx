import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';


function Todos() {
  return (
    <div className="w-fit m-auto p-3 px-6 mt-[50px] rounded-[12px] border-gray-300 border-[3px] ">
      <p className='font-bold text-[24px] text-blue-950 text-center mb-[20px]'>To Do List</p>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default Todos;
