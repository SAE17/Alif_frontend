import React, { useEffect, useState } from 'react'
import { DateTime } from 'luxon'
import Hall from '../Hall'

export default function Home() {
    const [timeS, setTime] = useState(DateTime.local().toFormat('yyyy-MM-dd TT'))

    useEffect(() => {
        setInterval(() => {
            setTime(DateTime.local().toFormat('yyyy-MM-dd TT'))
        }, 1000)
    }, [])

    useEffect(() => {

    }, [timeS])

    return (
        <div>
            <h1>{timeS}</h1>
            <Hall
                nowSec={DateTime.local().second}
            />
        </div>
    )
}