import React, { useState } from 'react'

export default function Rate() {
    let [counter, setCounter] = useState(0);

    const addOne = () => {
        let num = (counter + 1) % 6;
        setCounter(num);
    }
    const subOne = () => {
        let num = (counter - 1 + 6) % 6;
        setCounter(num);
    }
  return (
    <div className='d-flex justify-content-center align-items-center row'>
        <p className='text-center'>{counter}</p>
        <button onClick={subOne} className='btn btn-secondary col-1 m-2'>-</button>
        <button onClick={addOne} className='btn btn-secondary col-1 m-2'>+</button>
    </div>
  )
}
