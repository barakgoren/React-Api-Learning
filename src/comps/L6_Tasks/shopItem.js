import React from 'react'

export default function ShopItem(props) {
  const item = props.item;
  return (
    <div className='border col-md-6'>
      <img className='float-start w-25 me-2' src={item.image} alt={item.name} />
      <h1>{item.name}</h1>
      <div><b>Price:</b> {parseInt(item.price).toLocaleString()}$</div>
      <div><b>Category:</b> {item.cat}</div>
    </div>
  )
}
