import { Login } from '@app/entities/login/login';
import { User } from '@app/entities/user/user';
import { AuthJWT } from '@app/entities/auth/authJWT';
import { UserRepository } from '@app/repository/user.repository';
import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';

interface CreateUserUseCaseRequest {
  name: string;
  login: string;
  password: string;
}

interface CreateUserUseCaseResponse {
  user: User;
  access_token: string;
}

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute({
    login,
    name,
    password,
  }: CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse> {
    const user = new User({
      login: new Login(login),
      name,
      password: await hash(password, 10),
    });

    const payload = {
      sub: user.id,
    };

    const access_token = AuthJWT.sign({ payload });

    await this.userRepository.create(user);

    return {
      user,
      access_token,
    };
  }
}
