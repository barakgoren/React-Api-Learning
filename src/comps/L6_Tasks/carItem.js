import React from 'react'

export default function CarItem(props) {
    const item = props.item;
    return (
        <div className='border col-md-6 p-2'>
            <h1>{item.car_model}</h1>
            <div><b>Price:</b> {item.price}</div>
            <div><b>Company:</b> {item.car}</div>
        </div>
    )
}
