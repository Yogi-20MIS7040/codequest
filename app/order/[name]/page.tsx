import React from 'react'


function page({params}) {
  return (
    <div>
        <h1>order type {params.name}</h1>
    </div>
  )
}

export default page