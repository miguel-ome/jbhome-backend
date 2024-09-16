import { CreateUserDTO } from '../dto/user/createUser.dto';
import { CreateUserUseCase } from '@app/useCases/user/createUser.useCase';
import { FindUserByIdUseCase } from '@app/useCases/user/findUserById.useCase';
import { DeleteUserUseCase } from '@app/useCases/user/deleteUser.useCase';
import { SignInUserDTO } from '../dto/user/signInUser.dto';
import { AuthUserUseCase } from '@app/useCases/user/authUser.useCase';
export declare class UserController {
    private createUserUseCase;
    private findUserByIdUseCase;
    private deleteUserUseCase;
    private authUserUseCase;
    constructor(createUserUseCase: CreateUserUseCase, findUserByIdUseCase: FindUserByIdUseCase, deleteUserUseCase: DeleteUserUseCase, authUserUseCase: AuthUserUseCase);
    create(body: CreateUserDTO): Promise<{
        status: number;
        body: {
            message: string;
            data: {
                id: string;
                login: string;
                name: string;
            };
            accessToken: string;
        };
    }>;
    signIn(body: SignInUserDTO): Promise<{
        status: number;
        body: {
            message: string;
            data: {
                accessToken: string;
            };
        };
    }>;
    findUserById(userId: string): Promise<{
        status: number;
        body: {
            message: string;
            data: {
                id: string;
                login: string;
                name: string;
            };
        };
    }>;
    deleteUser(userId: string): Promise<{
        status: number;
        body: {
            message: string;
        };
    }>;
}
