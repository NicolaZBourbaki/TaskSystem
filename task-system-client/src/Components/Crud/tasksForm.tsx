import * as React from 'react';
import { Input, Button } from '../../Common/Components/form';
import Task from '../../Models/task';

interface Props {
    task: Task;
    onChange: (fieldName: string, value: string) => void;
    onSave: () => void;
}

export const TaskForm: React.FunctionComponent<Props> = (props) => { 
    return (
        <form className='container text-left pt-5'>
            <h1>Create task</h1>

            <Input
                name="Title"
                label="Title"
                value={props.task.Title}
                onChange={props.onChange}
            />

            <Input
                name="Description"
                label="Description"
                value={props.task.Description}
                onChange={props.onChange}
            />

            {<Input
                name="Status"
                label="Status"
                value={props.task.Status}
                onChange={props.onChange}
            />}

            <Input
                name="Priority"
                label="Priority"
                value={props.task.Priority}
                onChange={props.onChange}
            />

            <Button
                label="Save"
                className="btn btn-success mt-2"
                onClick={props.onSave}
            />
        </form>
    );
};
