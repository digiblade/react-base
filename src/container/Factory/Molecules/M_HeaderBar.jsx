import React from 'react'
import A_TextButton from '../Atoms/Buttons/A_TextButton'
export default function M_HeaderBar() {
    return (
        <div className='w-full h-12 bg-blue-700 flex justify-between items-center px-16'>
            <A_TextButton label="hello"/>
            <div className='flex space-x-2'>
                <A_TextButton label="Home"/>
                <A_TextButton label="About"/>
                <A_TextButton label="Products"/>
                <A_TextButton label="Category"/>
            </div>
        </div>
    )
}
