import React from 'react'

function Button() {

    let counter = 0;

    const handleClick = (name) => {
        counter++;
        if (counter <= 3) {
        console.log(`${name} clicked ${counter} times!`) }
        else {
            console.log(`${name} clicked more than 3 times!`)
        }
    }


    const handleClick2 = (e) => {
        e.target.style.backgroundColor = 'red';
        e.target.style.color = 'white';
        e.target.innerText = 'Clicked!';
    }

  return (
    <>
      <button onClick={() => handleClick('John')}>Click me</button>
      <button onClick={(e) => handleClick2(e)}>Click me for more info</button>
    </>
  )
}

export default Button
