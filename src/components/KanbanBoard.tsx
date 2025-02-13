import Column from "./Column";
import { Column as ColumnType } from "../types";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useDispatch } from "react-redux";
import { updateTask } from "../utils/taskSlice";

const COLUMNS: ColumnType[] = [
    { id: 'Pending', title: 'To Do' },
    { id: 'In Progress', title: 'In Progress' },
    { id: 'Completed', title: 'Done' },
];

const KanbanBoard: React.FC = () => {
    const dispatch = useDispatch();

    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;
        if (!over) return;
        const taskId = active.id as string;
        const newStatus = over.id as string;
        dispatch(updateTask({ id: taskId, status: newStatus }));
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