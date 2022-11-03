import React from 'react'

type Props = {
    placeholder:string,
    value?:string,
    name:string
}

export default function Input({placeholder, value, name}:Props) {
  return (
    <div>
        <input className='form-control' placeholder={placeholder} value={value} name={name} />
    </div>
  )
}
