import { User } from '@app/entities/user/user';
import { UserRepository } from '@app/repository/user.repository';
interface CreateUserUseCaseRequest {
    name: string;
    login: string;
    password: string;
}
interface CreateUserUseCaseResponse {
    user: User;
    accessToken: string;
}
export declare class CreateUserUseCase {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    execute({ login, name, password, }: CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse>;
}
export {};
