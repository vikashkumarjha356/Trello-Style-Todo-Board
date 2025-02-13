import React from "react";
import Column from "./Column";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const KanbanBoard: React.FC = () => {
    const queryClient = useQueryClient();

    const { data: todos, isLoading } = useQuery(["todos"], async () => {
        const res = await fetch("https://dummyjson.com/todos");
        const data = await res.json();
        return data.todos;
    });

    const updateTodoMutation = useMutation(
        async (updatedTodo) => {
            await fetch(`https://dummyjson.com/todos/${updatedTodo.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedTodo)
            });
        },
        {
            onSuccess: () => queryClient.invalidateQueries(["todos"])
        }
    );

    if (isLoading) return <div>Loading...</div>;

    return (
        <div className="flex gap-4 p-4">
            <Column title="Pending" todos={todos.filter(todo => todo.status === "Pending")} updateTodo={updateTodoMutation.mutate} />
            <Column title="In Progress" todos={todos.filter(todo => todo.status === "In Progress")} updateTodo={updateTodoMutation.mutate} />
            <Column title="Completed" todos={todos.filter(todo => todo.status === "Completed")} updateTodo={updateTodoMutation.mutate} />
        </div>
    );
};

export default KanbanBoard;
