import React from 'react'
import { Ring } from 'ldrs/react'
import 'ldrs/react/Ring.css'

// Default values shown


function loading() {
    return (
        <div className='flex items-center justify-center w-screen h-screen'>
            <Ring
                size="120"
                stroke="10"
                bgOpacity="0"
                speed="2"
                color="white"
            />
        </div>
    )
}

export default loading