import { UserRepository } from '@app/repository/user.repository';

interface DeleteUserUseCaseRequest {
  id: string;
}

type DeleteUserUseCaseResponse = Promise<void>;

export class DeleteUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute({ id }: DeleteUserUseCaseRequest): DeleteUserUseCaseResponse {
    await this.userRepository.delete(id);
  }
}
