import React from 'react';
import Checkbox from './common/checkbox';


const ToDoList = ({ data, onCheck, onDelete }) => {

    if(data.length === 0) return (<div className="alert alert-primary" role="alert">No tasks available!</div>); 

    return (
        <div className="list-group col-6 center-col">
            {data.map(d => (
                <React.Fragment key={d._id}>
                    <li className="list-group-item">
                        <span>
                            <Checkbox
                                value           = {d.complete}
                                data            = {d}
                                checked_status  = {d.complete}
                                handleChange    = {onCheck}
                            />
                        </span>
                        <span className="text-end ms-3">
                            {d.title}
                        </span>
                        <span
                            className   = "delete-badge float-end badge text-bg-danger"
                            onClick     = { () => onDelete(d) }
                        >
                            delete
                        </span>
                    </li>
                </React.Fragment>
            ))}
        </div>   
    );
}

export default ToDoList;