import { IsNotEmpty, Length } from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty({ message: 'Campo obrigatório' })
  @Length(3, 20, { message: 'Login inválido' })
  login: string;

  @IsNotEmpty({ message: 'Campo obrigatório' })
  name: string;

  @IsNotEmpty({ message: 'Campo obrigatório' })
  password: string;
}
