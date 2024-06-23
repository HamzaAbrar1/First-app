import React from 'react'

import { useUser } from './Context/UserContextAll'
export default function Check() {
  const {name,func2}=useUser(); 
  
    return (
    <div>
      
the name is : {name} <br />
the func2 return value is : {func2()};
    </div>
  )
}
