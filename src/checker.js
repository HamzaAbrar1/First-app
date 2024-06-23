import React from 'react'
import { useUser } from './Context/UserContextAll'
export default function Checker() {
 
 const value=useUser();
 
    return (
    <div>
    firstValue = {value.func1()}


    </div>
  )
}
