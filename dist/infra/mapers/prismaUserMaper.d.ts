import { User } from '@app/entities/user/user';
import { User as RowUser } from '@prisma/client';
export declare class PrismaUserMaper {
    static toPrisma(user: User): {
        id: string;
        login: string;
        name: string;
        password: string;
        createdAt: Date;
        updatedAt: Date | null;
    };
    static toDomain(rowUser: RowUser): User;
}
