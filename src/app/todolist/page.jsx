"use client";
import React, { useState } from "react";

const TodoListPage = () => {
  const [todos, setTodos] = useState([]);
  const fetchdata = () => {
    fetch(`http://localhost:4000/todos`),
      {
        method: "GET",
      };
    const data = JSON.stringify(fetchdata);
  };

  return (
    <div>
      <h1>투두 리스트</h1>
    </div>
  );
};

export default TodoListPage;
