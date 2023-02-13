import React, { useState } from 'react'
import { IState } from "../App";

interface IProps {
  setPeople: React.Dispatch<React.SetStateAction<IState["people"]>>
}

const AddTodo: React.FC<IProps> = ({ setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    url: "",
    note: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setInput(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleClick = (): void => {
    setPeople((prev): IState["people"] => ([
      ...prev,
      {
        ...input,
        age: +input.age
      }
    ]))
    setInput({
      name: "",
      age: "",
      url: "",
      note: ""
    })
  }

  return (
    <div className='AddToList'>
      <h3>Add Todo</h3>
      <input className='AddToList-input' type="text" placeholder='Name' value={input.name} name="name" onChange={handleChange} />
      <input className='AddToList-input' type="text" placeholder='Age' value={input.age} name="age" onChange={handleChange} />
      <input className='AddToList-input' type="text" placeholder='Image Url' value={input.url} name="url" onChange={handleChange} />
      <textarea className='AddToList-input' placeholder='Note' name="note" onChange={handleChange} />
      <button className="AddToList-btn" value={input.note} onClick={handleClick}>Add to list</button>
    </div>
  )
}

export default AddTodo