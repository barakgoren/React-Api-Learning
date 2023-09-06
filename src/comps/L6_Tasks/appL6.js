import React from 'react'
import ShopList from './shopList'
import CarList from './carList'
import CurrencyConv from '../previous/currencyConv'
import AppLesson5 from '../L5_comps/appLesson5'


export default function AppL6() {
  return (
    <div>
        <ShopList/>
        <br/><hr/><br/> 
        <CarList/>
        <br/><hr/><br/> 
        <h1 className='text-danger text-center'>More works through the semester</h1>
        <br/>
        <CurrencyConv />
        <br/><hr/><br/> 
        <AppLesson5/>
        <br/>
    </div>
  )
}
