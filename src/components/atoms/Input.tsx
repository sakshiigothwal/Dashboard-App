import React from 'react'

type InputProps = {
  type: string
  placeholder: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onFocus: () => void
}

const Input = (props: InputProps) => {
  return (
    <input
      type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange} onFocus={props.onFocus}
    />
  )
}

export default Input
