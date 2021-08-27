import { Button } from '../Button/index'
import { useForm, SubmitHandler } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'

import './styles.scss'

interface CreateUserProps {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export function Home() {
  const { register, handleSubmit, formState } = useForm()
  const { errors } = formState

  const handleCreateUser:SubmitHandler<CreateUserProps> = (values) => {
    console.log(values)
  }

  return (
    <div className="container" >
      <div className="content" >
        <h1>Cadastre-se</h1>

        <form className="form" onSubmit={handleSubmit(handleCreateUser)}>
          <input 
              type="text"
              {...register("name", { required: 'This is required' })}
              placeholder="Nome"
            />
            <ErrorMessage  errors={errors} name="name" />
            <input 
              type="email"
              {...register('email')}
              placeholder="E-mail"
            />
            <input
              type="text"
              {...register('password')}
              placeholder="Senha"
            />
            <input 
              type="text"
              {...register('password_confirmation')}
              placeholder="Confirmar senha"
            />
        </form>
        
        <Button />

      </div>
    </div>
  )
}