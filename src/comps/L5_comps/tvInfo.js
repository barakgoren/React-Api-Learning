import React, { useState } from 'react'

export default function TvInfo(props) {
    const [isShow, setIsShow] = useState(false);
    const views = props.item.views.toLocaleString();
    const setShow = () => {
        setIsShow(!isShow);
    }
    return (
        <div className='border border-info item rounded-4'>
            <div className='row'>
                <h3 className='text-primary-emphasis'>{props.item.name}</h3>
                <div><b>Views:</b> {views}</div>
                <div className='col-9'><b>Genere:</b> {props.item.genere}</div>
                <div className='col-3 float-end'>
                    <button onClick={setShow} className='float-end border border-primary bg-primary'>Read more</button>
                </div>
                {isShow && <div>
                    <hr />
                    <div className='pb-2 more-info scrollable-div overflow-auto'>
                        {props.item.descrption}
                    </div>
                </div>}
            </div>
        </div>
    )
}
