import { Button } from "../Button/index";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import "./styles.scss";

interface CreateUserProps {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const CreateUserForm = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha orbrigatória'),
  password_confirmation: yup.string().oneOf([yup.ref('password'), null], 'As senhas precisam ser iguais')
})

export function Home() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(CreateUserForm)
  });
  const { errors } = formState;

  console.log(errors)

  const handleCreateUser: SubmitHandler<CreateUserProps> = (values) => {
    console.log(values);
  };

  return (
    <div className="container">
      <div className="content">
        <h1>Cadastre-se</h1>

        <form className="form" onSubmit={handleSubmit(handleCreateUser)}>
          <div className="input-group">
            <div>
              <label htmlFor="name">Nome</label>
              <input 
                type="text"
                {...register("name")}
                
              />
              { errors.name && (
                <p>{errors.name?.message}</p>
              ) }
            </div>
            <div>
              <label htmlFor="email">E-mail</label>
              <input 
                type="email"
                {...register("email")}
              />
            </div>
            <div>
              <label htmlFor="password">Senha</label>
              <input 
                type="password"
                {...register("password")}
              />
            </div>
            <div>
              <label htmlFor="password_confirmation">Confirme a senha</label>
              <input 
                type="password"
                {...register("password_confirmation")}
              />
            </div>
          </div>
          <div className="button">
            <Button />
          </div>
        </form>
      </div>
    </div>
  );
}
