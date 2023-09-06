import React, { useRef, useState } from 'react'


export default function CurrencyConv() {
    const [result, setResult] = useState(0);
    const [isValid, setValid] = useState(true);
    const input = useRef();
    const currencyRef = useRef();
    let display = "";

    const currencies = {
        USD: 3.65,
        EUR: 4.3,
        GBP: 5.2,
        THB: 0.11
    };

    const displayResult = () => {
        let currencyChose = currencies[currencyRef.current.value];
        let num = input.current.value;
        display = parseFloat(num * currencyChose).toFixed(2);
        setResult(display);
        setValid(prevValid => display >= 0 ? true : false);
        console.log(isValid);
    }
    return (
        <div className='convertor'>
            <div className='small'>Enter the currency you want to exchange:</div>
            <select className="form-select w-50" ref={currencyRef} aria-label="Default select example" id="currency" name="currency">
                <option value="USD">$ - U.S. Dollars</option>
                <option value="EUR">€ - Euro</option>
                <option value="GBP">£ - British Pound</option>
                <option value="THB">฿ - Thai Baht</option>
            </select>
            <div className='mt-2 small'>Enter the amount:</div>
            <input className='form-control w-50' ref={input} type="number" placeholder='100'></input>
            <button className="mt-2 btn btn-primary" onClick={displayResult}>Submit</button>
            <div className='small'>
                It will cost you {result} NIS.
            </div>
        </div>
    )
}
