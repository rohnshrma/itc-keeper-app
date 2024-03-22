import React, { useState } from "react";


const TasksContext = React.createContext();



export const TaskContextProvider = (props) => {

    const [tasks, setTasks] = useState([])

    const addTaskHandler = (taskObj) => {
        setTasks((prevTasks) => {
            return [taskObj, ...prevTasks]
        })
    }

    const deleteTaskHandler = (id) => {
        setTasks((prevTasks) => {
            return prevTasks.filter((task, index) => {
                return index !== id
            })
        })
    }


    return <TasksContext.Provider  value={{tasks,addTaskHandler,deleteTaskHandler}}>
        {props.children}
    </TasksContext.Provider>
}


export default TasksContext