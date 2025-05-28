import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { getNames, deleteName, postName } from '../apis';
import '../App.css';

function Names() {
  const [name, setName] = useState('')
  const [names, setNames] = useState({})

  useEffect(() => {
    (async () => {
      const data = await getNames()
      setNames(data)
    })()
  }, [])

  const handleSubmit = async () => {
    const reqBody = {
      name_id: uuidv4(),
      name: name
    }
    await postName(reqBody)
    const data = await getNames()
    setNames(data)
  }

  const handleDelete = async (name_id) => {
    console.log(name_id)
    await deleteName(name_id)
    const data = await getNames()
    setNames(data)
  }

  return (
    <div className="main">
      <header className="title">
        <h1>Names</h1>
      </header>

      <div className='elInputContanier'>
        <h3>Add New Name</h3>

        <div className='elInput'>
          <input
            className='inputBox'
            id='name-name-input'
            type='text'
            placeholder='Enter Name'
            value={name}
            onChange={(event) => {
              setName(event.target.value)
            }}
          />
          <button onClick={() => { 
              handleSubmit()
              setName('')
            }}
            className='button'>Add</button>
        </div>
      </div>

      {Object.keys(names).length === 0 &&
        <div className='els'>
          <h2>No names in list. Please add...</h2>
        </div>
      }
      <div className='els'>
        {
          Object.keys(names).map((item) => (
            <div key={item} className='elItem'>
              <p>{names[item].name}</p>
              <button onClick={() => handleDelete(item)}>Delete</button>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Names;
