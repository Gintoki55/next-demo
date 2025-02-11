"use client";
import React from 'react'
import { useEffect, useState } from 'react';
function Todo() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        const fetchTodos = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            const data = await response.json();
            setTodos(data);
        }
        fetchTodos();
    }, []);
  return (
    <div className='bg-white rounded-lg flex flex-col gap-10'>
      <h1 className='font-semibold text-center w-full bg-blue-300 py-4 px-8 rounded-lg'>use Client</h1>
      <h2 className='py-4 px-8 '> {todos.title}</h2>
    </div>
  )
}

export default Todo;