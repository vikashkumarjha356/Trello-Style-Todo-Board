import Column from "./Column";
import { Column as ColumnType } from "../types";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useDispatch } from "react-redux";
import { updateTask } from "../utils/taskSlice";

// Define the columns for the Kanban board
const COLUMNS: ColumnType[] = [
    { id: 'Pending', title: 'To Do' },
    { id: 'In Progress', title: 'In Progress' },
    { id: 'Completed', title: 'Done' },
];

const KanbanBoard: React.FC = () => {
    const dispatch = useDispatch();

    // Function to handle the end of a drag event
    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;
        if (!over) return; // If the task is not dropped over a valid target, do nothing
        const taskId = active.id as string; // Get the ID of the dragged task
        const newStatus = over.id as string; // Get the ID of the column where the task was dropped
        dispatch(updateTask({ id: taskId, status: newStatus })); // Dispatch the updateTask action to update the task's status
    }

    return (
        <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
            <div className="flex gap-6 overflow-x-auto">
                <DndContext onDragEnd={handleDragEnd}>
                    {COLUMNS.map((column) => (
                        <Column key={column.id} column={column} />
                    ))}
                </DndContext>
            </div>
        </div>
    );
};

export default KanbanBoard;