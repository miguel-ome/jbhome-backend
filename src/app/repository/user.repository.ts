import { User } from '@app/entities/user/user';

export abstract class UserRepository {
  abstract create(user: User): Promise<void>;
  abstract findById(id: string): Promise<User | null>;
  abstract findUserByLogin(login: string): Promise<User | null>;
  abstract delete(id: string): Promise<void>;
}
