import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Child from '../Child';

function Manage () {
    const [name, setName] = useState('1');
    useEffect(() => {

        // const timer = setInterval(() => {
        //     console.log(1)
        // }, 1000)
        // return () => {
        //     clearInterval(timer)
        // }
    })

    return (
        <div>
            Manage
            <Link to="/" >1</Link>
            <Child initName={name} />
            <button onClick={() => setName('haha')}>M</button>
        </div>
    );
}

export default Manage