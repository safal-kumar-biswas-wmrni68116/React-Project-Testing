import React from 'react'
import { useState } from 'react'

function ArrayObjectUpdate() {

    // array of objects
    const [people, setPeople] = useState([
        { id: 1, name: 'John', age: 30 },
        { id: 2, name: 'Jane', age: 25 },
        { id: 3, name: 'Bob', age: 35 }
    ])

    function addPerson() {
        const newPerson = {
                id: people.length + 1,
                name: document.getElementById('nameInput').value,
                age: parseInt(document.getElementById('ageInput').value)
            }
            setPeople([...people, newPerson]);
    }

  return (
    <>
        {/* pressing enter in the first input feild will redirect me to the next input field. Then in the second input field, pressing enter will add the person (if both are validly filled) */}
        <input type="text" id='nameInput' value="name" placeholder='Enter Name' onKeyPress={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            ageInputRef.current.focus();
          }
        }}/>
        <input type="number" id='ageInput' value="age" ref={ageInputRef} placeholder='Enter Age' onKeyPress={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            addPerson();
          }
        }}/>       
        <button onClick={addPerson}>Add Person</button>
        
      <h2>List of People</h2>
      <ul>
        {people.map((person) => (
          <li key={person.id} onClick={() => {
            setPeople(people.filter(p => p.id !== person.id));
          }}>
            <strong>{person.name}</strong> - {person.age} years old
          </li>
        ))}
      </ul>
    </>
  )
}

export default ArrayObjectUpdate
