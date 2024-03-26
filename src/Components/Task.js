import React from 'react'

const Task = (props) => {

    var clickHandler = ()=>{
        props.onDelete(props.id)
    }

  return (
    <div className='task'>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <button onClick={clickHandler} >✖</button>
    </div>
  )
}

export default Task