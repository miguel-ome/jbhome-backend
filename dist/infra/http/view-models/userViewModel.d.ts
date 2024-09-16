import { User } from '@prisma/client';
export declare class UserViewModel {
    static toHttp(user: User): {
        id: string;
        login: string;
        name: string;
    };
}
