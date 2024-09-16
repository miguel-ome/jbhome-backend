import { UserRepository } from '@app/repository/user.repository';
interface AuthUserUserCaseRequest {
    login: string;
    password: string;
}
interface AuthUserUserCaseResponse {
    accessToken: string;
}
export declare class AuthUserUseCase {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    execute({ login, password, }: AuthUserUserCaseRequest): Promise<AuthUserUserCaseResponse>;
}
export {};
