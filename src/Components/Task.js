import React from 'react'

const Task = (props) => {

    var clickHandler = ()=>{
        props.onDelete(props.id)
    }

  return (
    <div className='task'>
        <h2>{props.name}</h2>
        <h3>{props.description}</h3>
        <button onClick={clickHandler} >Delete</button>
    </div>
  )
}

export default Task