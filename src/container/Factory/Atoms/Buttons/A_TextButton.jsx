import React from 'react'

export default function A_TextButton(props) {
    return (
        <div className='text-white font-semibold'>
            {props.label?props.label:""}
        </div>
    )
}