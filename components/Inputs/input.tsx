import React, { InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string,
  value?: string,
  name: string,
  title?: string
}

export default function Input({ placeholder, value, name, title, ...rest }: Props) {
  return (
    <div>
      <label className='form-label' style={{marginTop:20}}>{title}</label>
      <input className='form-control' placeholder={placeholder} value={value} name={name} {...rest} />
    </div>
  )
}
