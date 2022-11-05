import { useState } from 'react';
import Button from './common/button';
import Input from './common/input';
import '../to-do.css';


function ToDo(props){

    const [data, setData] = useState('');

    const button_class  = ( data === '' ) ? "btn-disabled btn btn-primary mb-3" : "btn btn-primary mb-3";
    
    function createTask() {
        const task      = {};
        task._id        = Date.now().toString(); // if we connect this app to a database, this field is not required.
        task.title      = data;
        task.complete   = false;
        return task;
    }

    function handleChange({ currentTarget: input }) {
        setData(input.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const task = createTask();
        props.onAdd(task); // this can be wrapped in try catch block if we actually call the backend services
        setData(''); // empty the value after successful add.
    }

    return (
        <form onSubmit={handleSubmit} className="d-flex justify-content-center row g-3">
            <div className="col-auto">
                <Input
                    type            = 'text'
                    id              = 'todo'
                    placeholder     = 'enter title'
                    value           = {data}
                    handleChange    = {handleChange}
                />
            </div>
            <div className="col-auto">
                <Button
                    type            = 'submit'
                    button_class    = {button_class}
                    is_disabled     = {data}
                    title           = 'Add Task'
                />
            </div>
        </form>
    );
}
export default ToDo;