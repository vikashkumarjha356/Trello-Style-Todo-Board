import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Task } from '../types';
type TaskState = {
    tasks: Task[];
};

const initialState: TaskState = {
    tasks: [
        {
            "id": '1',
            "title": "Buy groceries",
            "description": "Milk, eggs, bread, and fruits",
            "status": "Pending"
        },
        {
            "id": '2',
            "title": "Workout",
            "description": "30-minute run and strength training",
            "status": "Completed"
        },
        {
            "id": '3',
            "title": "Read a book",
            "description": "Read 20 pages of a novel",
            "status": "In Progress"
        },
        {
            "id": '4',
            "title": "Fix bug in project",
            "description": "Debug the API response issue",
            "status": "Pending"
        },
        {
            "id": '5',
            "title": "Call mom",
            "description": "Check in and have a quick chat",
            "status": "Completed"
        },
        {
            "id": '6',
            "title": "Clean the house",
            "description": "Vacuum and dust all rooms",
            "status": "Pending"
        },
        {
            "id": '7',
            "title": "Write blog post",
            "description": "Draft an article about React performance optimization",
            "status": "In Progress"
        },
        {
            "id": '8',
            "title": "Pay bills",
            "description": "Electricity, internet, and water bills",
            "status": "Completed"
        },
        {
            "id": '9',
            "title": "Prepare dinner",
            "description": "Cook pasta and salad",
            "status": "Pending"
        }
    ]

};
const taskSlice = createSlice({
    initialState,
    name: 'task',
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload)
        },
        updateTask: (state, action: PayloadAction<Task>) => {
            const index = state.tasks.findIndex(task => task.id === action.payload.id);
            if (index !== -1) {
                state.tasks[index] = action.payload;
            }
        },

        changeStatus: (state, action: PayloadAction<{ id: string, status: string }>) => {
            const index = state.tasks.findIndex(task => task.id === action.payload.id);
            if (index !== -1) {
                state.tasks[index].status = action.payload.status;
            }
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        }
    }
})

export const { addTask, updateTask, changeStatus, deleteTask } = taskSlice.actions
export default taskSlice.reducer