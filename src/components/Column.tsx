import React from "react";
import { useDrop } from "react-dnd";
import TodoItem from "./TodoItem";
import { Todo } from "../types";

const Column: React.FC<{ title: string; todos: Todo[]; updateTodo: (todo: Todo) => void }> = ({ title, todos, updateTodo }) => {
  const [{ isOver }, drop] = useDrop({
    accept: "TODO",
    drop: (item: Todo) => updateTodo({ ...item, status: title }),
    collect: monitor => ({
      isOver: !!monitor.isOver()
    })
  });

  return (
    <div ref={drop} className={`w-1/3 p-4 bg-gray-200 rounded ${isOver ? "bg-gray-300" : ""}`}>
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default Column;