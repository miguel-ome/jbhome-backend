import { User } from '@app/entities/user/user';
import { UserRepository } from '@app/repository/user.repository';
interface FindUserByIdUseCaseRequest {
    id: string;
}
interface FindUserByIdUseCaseResponse {
    user: User;
}
export declare class FindUserByIdUseCase {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    execute({ id, }: FindUserByIdUseCaseRequest): Promise<FindUserByIdUseCaseResponse>;
}
export {};
