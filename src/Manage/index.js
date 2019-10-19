import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Child from '../Child';
import ReduxTest from '../ReduxTest';

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
      {name}
      <button onClick={() => setName(name + 1)}>M</button>


      <div>=-======================</div>

      <ReduxTest>t</ReduxTest>
    </div>
  );
}

export default Manage