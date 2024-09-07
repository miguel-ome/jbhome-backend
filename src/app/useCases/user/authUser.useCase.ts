import { UserRepository } from '@app/repository/user.repository';
import { NotFoundUser } from '../errors/user/NotFoundUser';
import { compare } from 'bcrypt';
import { IncorrectPassword } from '../errors/user/IncorrectPassword';
import { Injectable } from '@nestjs/common';
import { JWTAuth } from '@app/middlewares/auth.middleware';

interface AuthUserUserCaseRequest {
  login: string;
  password: string;
}

interface AuthUserUserCaseResponse {
  accessToken: string;
}

@Injectable()
export class AuthUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute({
    login,
    password,
  }: AuthUserUserCaseRequest): Promise<AuthUserUserCaseResponse> {
    const user = await this.userRepository.findUserByLogin(login);

    if (!user) throw new NotFoundUser();

    const isValidUser = await compare(password, user.password);

    if (!isValidUser) throw new IncorrectPassword();

    const payload = {
      sub: user.id,
    };

    const accessToken = JWTAuth.sign({ payload });

    return {
      accessToken,
    };
  }
}
