import React, { useEffect, useState } from 'react'
import './hall.css'

export default function Hall(props) {
    const {
        nowSec
    } = props
    const [color, setColor] = useState('')
    useEffect(() => {
        if (nowSec % 4 === 0) {
            setColor('red')
        } else {
            setColor('green')
        }
    }, [nowSec])
    return (
        <div className="hall" style={{ backgroundColor: color }}>

        </div>
    )
}