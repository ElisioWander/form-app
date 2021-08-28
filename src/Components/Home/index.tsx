import { Button } from "../Button/index";
import { Input } from "../Input/index"
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
  name: yup.string().required('Name is required'),
  email: yup.string().required().email(),
  password: yup.string().required(),
  password_confirmation: yup.string().oneOf(['password', null], 'As senhas precisam ser iguais')
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
            <Input
              label="Nome"
              {...register("Nome")}
            />
            <Input
              {...register("E-mail")}
              label="E-mail"
            />
            <Input
              {...register("Password")}
              label="Password"
            />
            <Input
              {...register("Password_confirmation")}
              label="Password confirmation"
            />
          </div>
          <div className="button">
            <Button />
          </div>
        </form>
      </div>
    </div>
  );
}
