import React from 'react'
import { useState } from 'react'

function ArrayUpdate() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5])


  function addNum() {
    const newNum = parseInt(document.getElementById('numInput').value)
    if (!isNaN(newNum)) {
      setNumbers([...numbers, newNum])
      document.getElementById('numInput').value = ''
    }
  }

  function removeNum() {
    const newNum = parseInt(document.getElementById('numInput').value)

    if (!isNaN(newNum)) {
      console.log(newNum)
      setNumbers(numbers.filter(num => num !== newNum))
      document.getElementById('numInput').value = ''
    }
    else {
      const lastNum = numbers[numbers.length - 1]
      setNumbers(numbers.filter(num => num !== lastNum))
    }
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      addNum()
    }
  }

  return (
    <div>
      <h2>List</h2>
      <ul>
        {numbers.map((val, index) =>
          <li key={index}>{val}</li>
        )}
      </ul>
        <input type="number" id='numInput' placeholder='Enter Number' onKeyPress={handleKeyPress} />
        {/* clicking this button or pressing Enter will add the number into the list */}
        <button onClick={addNum}>Add Number into List</button>                  
        <button onClick={removeNum}>Remove Number from List</button>
    </div>
  )
}

export default ArrayUpdate
