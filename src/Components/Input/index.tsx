import { forwardRef } from 'react'
import { ForwardRefRenderFunction, InputHTMLAttributes } from 'react'

import './styles.scss'

type InputProps = {
  name: string;
  label?: string;
}


const InputBase:ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({name, label}) => {
  return (
    <div>
      { !!label && <label htmlFor="name">{label}</label> }
        <input
          
        />
    </div>
  )
}

export const Input = forwardRef(InputBase)