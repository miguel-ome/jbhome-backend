import { Login } from '@app/entities/login/login';
import { User } from '@app/entities/user/user';
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
    await this.userRepository.create(user);

    return {
      user,
    };
  }
}
