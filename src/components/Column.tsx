
import { useDispatch, useSelector } from 'react-redux';
import { Column as ColumnType, Task, } from '../types';
import TaskCard from './TaskCard';
import { useDroppable } from '@dnd-kit/core';
import Modal from './Modal';
import { useState } from 'react';
import { addTask, updateTask } from '../utils/taskSlice';


type ColumnProps = {
  column: ColumnType;
};



const Column = ({ column }: ColumnProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState<Task | null>(null);
  const dispatch = useDispatch();
  const initialTasks = useSelector((store: { tasks: { tasks: Task[] } }) => store.tasks.tasks);
  const handleAddNewTask = () => {
    // Logic to add a new task
    console.log(`Add new task to ${column.title}`);
    setCurrentTask(null);
    setIsModalOpen(true);
  };


  const handleEditTask = (task: Task) => {
    // Logic to edit a task
    console.log(`Edit task: ${task.title}, ${task.id}`);
    setCurrentTask(task);
    setIsModalOpen(true);
  };

  const handleSaveTask = (title: string, description: string) => {
    if (currentTask) {
      // Logic to update the existing task
      console.log(`Update task: ${title}, ${description}`);
      dispatch(updateTask({ ...currentTask, title, description }));
    } else {
      // Logic to save the new task
      console.log(`Save new task: ${title}, ${description}`);
      dispatch(addTask({ id: Math.floor(Math.random() * 100).toString(), title, description, status: column.id }));
    }
    setIsModalOpen(false);
  };



  const { setNodeRef } = useDroppable({
    id: String(column.id),
  });

  return (

    <div className="flex flex-col w-full md:w-1/3 p-4 rounded-lg bg-neutral-800">
      <h2 className="mb-4 font-semibold text-neutral-100">{column.title}</h2>
      <div ref={setNodeRef} className='flex flex-1 flex-col gap-4'>
        {initialTasks.filter(task => task.status === column.id).map(task => (
          <TaskCard key={task.id} task={task} onEdit={handleEditTask} />
        ))}
      </div>
      <button
        onClick={handleAddNewTask}
        className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors duration-300"
      >
        Add New Task
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveTask}
        initialTitle={currentTask ? currentTask.title : ''}
        initialDescription={currentTask ? currentTask.description : ''}
      />
    </div>

  )
}

export default Column