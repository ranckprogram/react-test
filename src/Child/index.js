import React, { useState,useEffect } from 'react';

function Child ({ initName }) {
  const [name, setName] = useState(initName);
  
  // useEffect(() =>{
  //   setName(initName)
  // })

  return (
    <div>
    { name }

      </div>
  )
}

export default Child;
