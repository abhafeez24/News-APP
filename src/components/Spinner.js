import React from 'react'
import Loading from "./loading.gif";

export default function Spinner() {
  return (
    <div className='text-center'>
        <img src={Loading} style={{width: "100px"}} alt="Loading..." />
    </div>
  )
}
