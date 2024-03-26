import React, { useContext } from 'react'
import CreateArea from './Components/CreateArea'
import TasksContext from './Context/TasksContext'
import Tasks from './Components/Tasks'
import "./style.css"

const App = () => {

  const ctx = useContext(TasksContext)

  return (
    <div className='app'>
      <header>
        <h2 className="title">Keeper App</h2>
      </header>
      <CreateArea onAdd={ctx.addTaskHandler} />
      <Tasks />
    </div>
  )
}

export default App