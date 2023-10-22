import React, {useState} from 'react'
import { Form } from './Form'
import { Header } from './Header';
import { Todo } from './Todo';

export const Main = () => {
    const [lists, setList] = useState([]);

    const addList = lst => {
        setList([...lists, {id: Date.now(), isEditing: false, task: lst}])
        console.log(lists);
    }
    const deletList = id => {
        setList(lists.filter(list => list.id !== id))
    }
  return (
    <div className='main'>
       <Header />
      <Form addList = {addList}/>
      {lists.map((val, index) => (
        <Todo task={val} key={index} 
        deletList = {deletList}/>
      ))}
      
    </div>
  )
}

