export interface Todo {
    id: number;
    title: string;
    status: string;
}
export type TaskStatus = 'Pending' | 'In Progress' | 'Completed';

export type Task = {
    id: string;
    title?: string;
    description?: string;
    status: string;
};

export type Column = {
    id: TaskStatus;
    title: string;
};