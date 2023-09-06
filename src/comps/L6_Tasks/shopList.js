import React, { useEffect, useState } from 'react'
import ShopItem from './shopItem';

export default function ShopList() {
    const [shop_ar, setShopAr] = useState([]);

    useEffect(() => {
        doApi()
    }, [])

    const doApi = async () => {
        const url = 'https://monkeys.co.il/api2/shop.php';
        const resp = await fetch(url);
        const data = await resp.json();
        setShopAr(data);
    }
    return (
        <div className=''>
            <h1 className='text-center'>List Of Foods <span className='text-success'>(Task 1)</span></h1>
            <div className='row'>
                {shop_ar.map((item) => {
                    return (
                        <ShopItem key={item.id} item={item}/>
                    )
                })}
            </div>
        </div>
    )
}
