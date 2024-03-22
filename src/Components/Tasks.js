
import React,{useContext} from 'react'
import TasksContext from '../Context/TasksContext'
import Task from './Task'

const Tasks = () => {

    const ctx = useContext(TasksContext)

  return (
    <div>
        {ctx.tasks.map((task,index)=> <Task name={task.name} description={task.description} id={index} key={index} onDelete={ctx.deleteTaskHandler} /> )}
    </div>
  )
}

export default Tasks