import React, { InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLSelectElement> {
    placeholder?: string,
    value?: string,
    name: string,
    title?: string,
    data: any[]
}

export default function Select({ placeholder, value, name, title, data, ...rest }: Props) {
    return (
        <div>
            <label className='form-label' style={{ marginTop: 20 }}>{title}</label>
            <div>
                <select className='form-select' {...rest} name={name}>
                    <option value={''}>{placeholder}</option>
                    {
                        data?.map((val: any, i: number) => <option value={val?.id}>{val?.name}</option>)
                    }
                </select>
            </div>
        </div>
    )
}
