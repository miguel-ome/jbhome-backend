import { IsNotEmpty } from 'class-validator';

export class SignInUserDTO {
  @IsNotEmpty({ message: 'Login ou senha inválida' })
  login: string;

  @IsNotEmpty({ message: 'Login ou senha inválida' })
  password: string;
}
