export interface ITask {
    id?: string;
    title: string;
    description: string;
    dueDate?: string;
    isCompleted?: boolean;
    priority: 'high' | 'medium' | 'low';
};

export type TFilter = 'all' | 'high' | 'medium' | 'low';

export type TUser = {
    id: string;
    name : string;
};