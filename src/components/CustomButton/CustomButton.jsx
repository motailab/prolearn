import React from 'react'

export default function CustomButton({className, ...props}){
    return (
        <div className={`custom-button ${className ? className : ''}`}>
            <input type="radio" name={props.name ? props.name : 'button'} id={props.id ? props.id : 'button'} onChange={props.handleChange} value={props.value ? props.value : ''} />
            <label htmlFor={props.id ? props.id : 'button'}>{props.children}</label>
        </div>
    )
}
