import React,{useContext} from 'react'
import CreateArea from './Components/CreateArea'
import TasksContext from './Context/TasksContext'
import Tasks from './Components/Tasks'

const App = () => {

    const ctx = useContext(TasksContext)

  return (
    <div className='app'>
        <CreateArea onAdd={ctx.addTaskHandler} />
        <Tasks/>
    </div>
  )
}

export default App