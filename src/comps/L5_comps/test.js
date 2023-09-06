import React, { useEffect, useRef, useState } from 'react'
import { RiExpandUpDownFill } from 'react-icons/ri'
import { AiFillFolder } from 'react-icons/ai'
import TextInside from './textInside'
import Typewriter from 'typewriter-effect';

export default function Test() {
    const intro = `╭╮╭╮╭╮╱╱╭╮
┃┃┃┃┃┃╱╱┃┃
┃┃┃┃┃┣━━┫┃╭━━┳━━┳╮╭┳━━╮
┃╰╯╰╯┃┃━┫┃┃╭━┫╭╮┃╰╯┃┃━┫
╰╮╭╮╭┫┃━┫╰┫╰━┫╰╯┃┃┃┃┃━┫
╱╰╯╰╯╰━━┻━┻━━┻━━┻┻┻┻━━╯`;
    const [allFields, setFields] = useState([0]);
    const inputRef = useRef();

    const addItem = (e) => {
        if (e.code == "Enter") {
            setFields([...allFields, allFields.length]);
        }
    }

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [allFields]);
    return (
        <div className='w-75 main-container'>
            <div className='p-1 row top-bar'>
                <div className='ms-1 col-5 mt-1'>
                    <div className='d-flex'>
                        <div className="close-button">
                            <div className="close-icon">X</div>
                        </div>
                        <div className="mx-2 min-button">
                            <div className="pb-1 close-icon">_</div>
                        </div>
                        <div className="exp-button">
                            <div className="exp-icon">
                                <RiExpandUpDownFill />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex col-3 w-50 top-bar-text'>
                    <AiFillFolder className='folder-icon' />
                    <h6 style={{ color: 'white', fontSize: '14px' }}>React -- -zsh -- 80x28</h6>
                </div>
            </div>
            <div className='lines'>
                <div className='text-display ms-2 d-flex main-text'>
                    <pre style={{ whiteSpace: 'pre-wrap' }}>
                        <Typewriter
                            options={{
                                loop: false, // Set loop to false to type text just once
                                delay: 1,
                            }}
                            onInit={(typewriter) => {
                                typewriter.typeString(intro).start();
                            }}
                        />
                    </pre>
                </div>
                {allFields.map((index) => (
                    <div key={index}>
                        {index === allFields.length - 1 ?
                            <TextInside ref={inputRef} addItem={addItem} isDisable='false' /> :
                            <TextInside addItem={addItem} isDisable='true' />}
                    </div>
                ))}
            </div>
        </div>
    )
}
