import { useEffect, useState } from 'react';
import ToDo from './components/todo';
import ToDoList from './components/toDoList';

import { getTasks } from './services/fakeTasks';


function App(props){

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const initial_tasks = [...getTasks()];
        setTasks(initial_tasks);
    }, []);

    function handleDelete(task) {
        const new_tasks = tasks.filter( t => t._id !== task._id );
        setTasks(new_tasks);
    };

    function handleAdd(task) {
        const new_tasks = [ task, ...tasks ];
        setTasks(new_tasks);
    };

    function handleCheck(task) {
        const new_tasks         = [...tasks];
        const task_index        = tasks.indexOf( task );
        const new_task          = {...new_tasks[task_index]};
        new_task.complete       = !task.complete;
        new_tasks[task_index]   = new_task;

        setTasks(new_tasks);
    };

    return (
        <>
            <ToDo
                onAdd = {handleAdd}
            />
            <ToDoList
                data        = {tasks}
                onDelete    = {handleDelete}
                onCheck     = {handleCheck}
            />
        </>
    );
    
}
export default App;