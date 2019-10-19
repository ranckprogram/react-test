import React, { useState, useEffect } from 'react';

function Child ({ name }) {

  // useEffect(() =>{
  //   setName(initName)
  // })

  console.log('render')
  return (
    <div>
      afhja
      {name}
    </div>
  )
}

export default Child;
