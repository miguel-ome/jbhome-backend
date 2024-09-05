import { User } from '@app/entities/user/user';

export abstract class UserRepository {
  abstract create(user: User): Promise<void>;
  abstract findById(id: string): Promise<User>;
  abstract delete(id: string): Promise<void>;
}
