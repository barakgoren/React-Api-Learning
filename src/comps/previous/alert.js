import React, { useState } from 'react'

export default function Alert(props) {
    const condition = JSON.parse(props.success);
    const [isSuccess, setIsSuccess] = useState(condition);

    const setSuccess = () => {
        setIsSuccess(!isSuccess);
    }
    const dangerCss = {
        background: "#ff948c",
        border: "2px solid red",
        textAlign: "center",
        padding: "15px",
        margin: "15px"
    }
    const successCss = {
        background: "lightgreen",
        border: "2px solid green",
        textAlign: "center",
        padding: "15px",
        margin: "15px"
    }

    return (
        <div className='d-flex justify-content-center align-items-center row'>
            <div style={isSuccess ? successCss : dangerCss}>
                <div>
                    {isSuccess ? "Success" : "Error"}
                </div>
            </div>
            <button onClick={setSuccess} className='col-2 btn btn-primary'>Test</button>
        </div>

    )
}
