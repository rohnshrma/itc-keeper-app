import React, { useReducer } from 'react'

const initialState = {
  name : "",
  description : ""
}

const taskReducer = (state,action)=>{

  if(action.type === "NAMECHANGE"){
    return {
      name : action.payload,
      description : state.description
    }
  }

  else if(action.type === "DESCRIPTIONCHANGE"){
    return {
      name : state.name,
      description : action.payload
    }
  }
  else if(action.type === "EMPTY"){
    return {
      name : "",
      description : ""
    }
  }

return initialState
}


const CreateArea = (props) => {

  const [taskState,dispatch] = useReducer(taskReducer,initialState)

const nameChangeHandler = (e)=>{
  dispatch({type:"NAMECHANGE",payload : e.target.value})
}
const descriptionChangeHandler = (e)=>{
  dispatch({type:"DESCRIPTIONCHANGE",payload : e.target.value})
  
}

const submitHandler = (e)=>{
  e.preventDefault()
  props.onAdd(taskState)
  dispatch({type:"EMPTY"})
}

  return (
    <form onSubmit={submitHandler}>
        <div className="form-group">
            <input value={taskState.name} onChange={nameChangeHandler} type="text" placeholder='Enter Name'/>
        </div>
        <div className='form-group'>
            <input value={taskState.description} onChange={descriptionChangeHandler} type="text" placeholder='Enter Description'/>
        </div>
        <button>Add +</button>
    </form>
  )
}

export default CreateArea