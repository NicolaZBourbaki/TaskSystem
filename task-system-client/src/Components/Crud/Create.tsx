import React from 'react';
import * as toastr from 'toastr';
import Task from '../../Models/task';
import BaseService from '../../Services/base.service';
import { TaskPage } from './page.form';


interface IProps { 
    // history: History;
    // //Map properties match
    // match:{ 
    //     isExact: boolean
    //     params: {
    //         id:string
    //     },
    //     path: string,
    //     url: string,
    // }
}
interface IState {
    task: Task
}

export default class Create extends  React.Component<IProps, IState> {
    constructor(props:IProps) {
        super(props);
         
        this.state = {
            task: {
                Title: '',
                Description: '',
                Status: '',
                Priority: ''
            }
        }
        this.onFieldValueChange = this.onFieldValueChange.bind(this);
    }

    private onFieldValueChange(fieldName: string, value: string) { 
        const nextState = {
            ...this.state,
            task: {
                ...this.state.task,
                [fieldName]: value,
            }
        };

        this.setState(nextState);
    }
    private onSave = () => { 
        BaseService.create<Task>("/task/create", this.state.task).then(
            (rp) => {
                if (rp.Status) {
                    toastr.success('Member saved.'); 

                    this.setState({
                        task: {
                            Title: '',
                            Description: '',
                            Status: '',
                            Priority: '',
                            Id: '',
                        }
                    });
                     
                } else {
                    toastr.error(rp.Messages);
                    console.log("Messages: " + rp.Messages);
                    console.log("Exception: " + rp.Exception);
                }
            }
        );

    } 
     
    render() {
        return (
            <TaskPage
                task={this.state.task}
                onChange={this.onFieldValueChange}
                onSave={this.onSave}
            />
        );
    }     
     
}