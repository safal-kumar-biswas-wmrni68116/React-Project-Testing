import React from 'react'
import { useState } from 'react'

function OnChange() {

const [name, setName] = useState("")

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>{name}</p>
    </>
  )
}

export default OnChange
