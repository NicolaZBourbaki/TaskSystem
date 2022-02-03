import * as React from 'react';
import Task from '../../Models/task';
import { TaskForm } from './tasksForm';

interface IProps {
    task: Task;
    onChange: (fieldName: string, value: string) => void;
    onSave: () => void;
}

export const TaskPage: React.FunctionComponent<IProps> = (props: IProps) => {  
    return (
        <TaskForm
        task={props.task}
            onChange={props.onChange}
            onSave={props.onSave}
        />
    );
}
