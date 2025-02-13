import { useDraggable } from "@dnd-kit/core";
import { Task } from "../types";
import { deleteTask } from '../utils/taskSlice';
import { useDispatch } from 'react-redux';

type TaskCardProps = {
    task: Task;
    onEdit: (task: Task) => void;
}

const TaskCard = ({ task, onEdit }: TaskCardProps) => {
    const dispatch = useDispatch();
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: String(task.id),
    });

    // Apply transform style if the task is being dragged
    const style = transform
        ? {
            transform: `translate(${transform.x}px, ${transform.y}px)`,
        }
        : undefined;

    // Function to handle deleting a task
    const handleDeleteTask = (taskId: string) => {
        console.log(`Delete task with ID: ${taskId}`);
        dispatch(deleteTask(taskId)); // Dispatch deleteTask action
    };

    return (
        <div
            style={style}
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            className="cursor-grab rounded-lg bg-neutral-700 p-4 shadow-sm hover:shadow-md"
        >
            <h3 className="font-semibold text-lg text-neutral-100">{task.title}</h3>
            <p className="mt-2 text-sm text-gray-300">{task.description}</p>
            <div className="mt-4 flex justify-end gap-2">
                <button
                    onPointerDown={(e) => e.stopPropagation()}
                    onClick={() => onEdit(task)}
                    className="bg-yellow-500 text-white p-1 rounded hover:bg-yellow-600 transition-colors duration-300"
                >
                    Edit
                </button>
                <button
                    onPointerDown={(e) => e.stopPropagation()}
                    onClick={() => handleDeleteTask(task.id)}
                    className="bg-red-500 text-white p-1 rounded hover:bg-red-600 transition-colors duration-300"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TaskCard;