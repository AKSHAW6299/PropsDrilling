import React from 'react'
import GrandChild from '../GrandChild/GrandChild';


function Child({users}) {
    console.log("parent to child data :", users);
    
  return (
    <GrandChild users={users} />
  )
}

export default Child