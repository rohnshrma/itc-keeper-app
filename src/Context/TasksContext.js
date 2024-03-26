import React, { useState, useEffect } from "react";


const TasksContext = React.createContext();



export const TaskContextProvider = (props) => {

    const [tasks, setTasks] = useState([])

    // fetch
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://keeper-app-1199-default-rtdb.firebaseio.com/tasks.json")
                const data = await response.json()
                console.log("data from db =>", data);
                if(data.length > 0 ){
                    setTasks(data)
                }


            } catch (err) {
                console.log(err);
            }
        }
        fetchData()
    }, [])



    // send
    useEffect(() => {
        const sendData = async () => {
            try {
                const response = await fetch("https://keeper-app-1199-default-rtdb.firebaseio.com/tasks.json", {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(tasks)
                })
                const data = await response.json()
                console.log(data)
            } catch (err) {
                console.log(err);
            }
        }
        sendData()
    }, [tasks])




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

    console.log("Tasks => ", tasks);

    return <TasksContext.Provider value={{ tasks, addTaskHandler, deleteTaskHandler }}>
        {props.children}
    </TasksContext.Provider>
}


export default TasksContext