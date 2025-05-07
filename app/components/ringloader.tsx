import { Ring } from 'ldrs/react'
import 'ldrs/react/Ring.css'

<Ring
    size="40"
    stroke="5"
    bgOpacity="0"
    speed="2"
    color="black"
/>
import React from 'react'

function ringloader({ size = "30" , stroke = "5", bgOpacity = "0", speed = "2", color = "black"}: any) {
    return (
        <Ring
            size={size}
            stroke={stroke}
            bgOpacity="0"
            speed="2"
            color={color}
        />
    )
}

export default ringloader

