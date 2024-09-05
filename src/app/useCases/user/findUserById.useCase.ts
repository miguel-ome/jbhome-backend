import { User } from '@app/entities/user/user';
import { UserRepository } from '@app/repository/user.repository';
import { NotFoundUser } from '../errors/user/NotFoundUser';
import { Injectable } from '@nestjs/common';

interface FindUserByIdUseCaseRequest {
  id: string;
}

interface FindUserByIdUseCaseResponse {
  user: User;
}

@Injectable()
export class FindUserByIdUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute({
    id,
  }: FindUserByIdUseCaseRequest): Promise<FindUserByIdUseCaseResponse> {
    const user = await this.userRepository.findById(id);

    if (!user) throw new NotFoundUser();

    return {
      user,
    };
  }
}
