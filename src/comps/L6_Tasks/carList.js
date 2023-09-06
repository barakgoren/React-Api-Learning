import React, { useEffect, useState } from 'react'
import CarItem from './carItem';

export default function CarList() {
    const [car_ar, setCarAr] = useState([]);

    useEffect(() => {
        doApi();
    },[])

    const doApi = async () => {
        const url = 'https://myfakeapi.com/api/cars';
        const resp = await fetch(url);
        const data = await resp.json();
        setCarAr(data.cars.slice(0, 15));
    }
    return (
        <div>
            <div>
            <h1 className='text-center'>List Of Foods <span className='text-success'>(Task 2)</span></h1>
            <div className='row'>
                {car_ar.map((item) => {
                    return (
                        <CarItem key={item.id} item={item}/>
                    )
                })}
            </div>
        </div>
        </div>
    )
}
