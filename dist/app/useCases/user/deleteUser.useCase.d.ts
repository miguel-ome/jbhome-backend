import { UserRepository } from '@app/repository/user.repository';
interface DeleteUserUseCaseRequest {
    id: string;
}
type DeleteUserUseCaseResponse = Promise<void>;
export declare class DeleteUserUseCase {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    execute({ id }: DeleteUserUseCaseRequest): DeleteUserUseCaseResponse;
}
export {};
