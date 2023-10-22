import React from 'react'

export const Todo = ({task, deletList}) => {
  return (
    <div className='todo-main'>
      <p className='todo'>{task.task}</p>
      <div className='ed-del'>
      {/* <p className='ed'>edit</p> */}
      <p className='del' onClick={() => deletList(task.id)}>Delet</p>
      </div>
    </div>
  )
}

