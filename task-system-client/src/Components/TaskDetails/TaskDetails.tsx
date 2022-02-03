import React from 'react';
import './TaskDetails.css';

type TaskDetailsProps = {}

const TaskDetails: React.FC<TaskDetailsProps> = () => {
    return (
        <div className="container p-3 my-3text-white">
            <div className="d-flex justify-content-end">
            <div className="row">
                <div className="col-xs-12 col-sm-9">

                    <div className="panel panel-default">
                        <div className="panel-body">
                            <div className="profile__header">
                                <h4>Title</h4>
                                <p className="text-muted">
                                    Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non nostrum odio cum repellat veniam eligendi rem cumque magnam autem delectus qui.
                                </p>
                                <p className="panel-title">
                                    Status
                                </p>
                                <p>
                                    Asigned to: <a href="#">UserProfileLink</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">Info</h4>
                            </div>
                            <div className="panel-body">
                                <table className="table profile__table">
                                    <tbody>
                                        <tr>
                                            <th><strong>Priority:</strong></th>
                                            <td>1-5</td>
                                        </tr>
                                        <tr>
                                            <th><strong>Date created:</strong></th>
                                            <td>02.03.2222</td>
                                        </tr>
                                        <tr>
                                            <th><strong>Date modified:</strong></th>
                                            <td>never</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <p>
                        <a href="#" className="btn-lg btn btn-success btn-block" data-toggle="modal" data-target="#profile__contact-form">
                            Update
                        </a>
                    </p>
                </div>
            </div>
        </div>

        </div>
        
    );
};

export default TaskDetails;