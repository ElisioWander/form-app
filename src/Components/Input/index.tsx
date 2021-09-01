import {
  forwardRef,
  ForwardRefRenderFunction
} from "react";
import { FieldError } from "react-hook-form";

interface InputProps {
  type: string;
  label: string;
  labelName: string;
  error: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({
  type,
  label,
  labelName,
  error,
  ...rest
}, ref) => {
  return (
    <div>
      <label htmlFor={label}>{labelName}</label>
      <input 
        type={type}
        ref={ref}
        {...rest}
      />;

      { error && (
        <p>{error.message}</p>
      ) }
    </div>
  )
};

export const Input = forwardRef(InputBase);
