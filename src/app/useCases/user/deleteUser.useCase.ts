import { UserRepository } from '@app/repository/user.repository';
import { Injectable } from '@nestjs/common';

interface DeleteUserUseCaseRequest {
  id: string;
}

type DeleteUserUseCaseResponse = Promise<void>;

@Injectable()
export class DeleteUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute({ id }: DeleteUserUseCaseRequest): DeleteUserUseCaseResponse {
    await this.userRepository.delete(id);
  }
}
