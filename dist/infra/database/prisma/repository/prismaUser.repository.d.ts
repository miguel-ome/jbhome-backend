import { User } from '@app/entities/user/user';
import { UserRepository } from '@app/repository/user.repository';
import { PrismaService } from '../prisma.service';
export declare class PrismaUserRepository implements UserRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(user: User): Promise<void>;
    delete(id: string): Promise<void>;
    findById(id: string): Promise<User | null>;
    findUserByLogin(login: string): Promise<User | null>;
}
