
import Column from "./Column";
import { Column as ColumnType } from "../types";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useDispatch } from "react-redux";
import { changeStatus } from "../utils/taskSlice";


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
        // console.log(typeof (active.id));
        const taskId = active.id as string;
        const newStatus = over.id as string;
        // console.log(active);
        // console.log(`Task ID: ${taskId}, New Status: ${newStatus}`);
        dispatch(changeStatus({ id: taskId, status: newStatus }));
    }

    return (
        <div className='p-4'>
            <div className='flex gap-8'>
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