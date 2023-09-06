import React from 'react';

export default function TextInside(props) {
    const inputStyle = {
        border: 'none',          // Remove input border
        background: 'none',     // Remove input background
        outline: 'none',         // Remove input outline
        width: '70%',           // Take up the entire width
        color: 'inherit',        // Inherit text color
        fontFamily: 'Monaco, Menlo, Consolas, "Courier New", monospace', // Monospaced font
    };

    const condition = props.isDisable === "true";
    return (
        <div className='ms-2 d-flex main-text'>
            <span className='text-display'>
                user@h-MBP-sl-YourName React %
            </span>
            {condition ? (
                <input
                    onKeyDown={props.addItem}
                    className='input-field'
                    type='text'
                    style={inputStyle}
                    disabled
                />
            ) : (
                <input
                    autoFocus
                    onKeyDown={props.addItem}
                    className='input-field'
                    type='text'
                    style={inputStyle}
                />
            )}
        </div>
    );
}
