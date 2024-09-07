import { User } from '@app/entities/user/user';
import { UserRepository } from '@app/repository/user.repository';

export class UserRepositoryInMemory implements UserRepository {
  users: User[] = [];

  async delete(id: string): Promise<void> {
    const indexUser = await this.users.findIndex((user) => user.id === id);
    if (indexUser < 0) throw new Error('User not found');
    this.users.splice(indexUser, 1);
  }

  async create(user: User): Promise<void> {
    await this.users.push(user);
  }

  async findById(id: string): Promise<User> {
    const user = await this.users.find((user) => user.id === id);
    if (!user) throw new Error('User is not found');
    return user;
  }

  async findUserByLogin(login: string): Promise<User | null> {
    const user = this.users.find((use) => use?.login === login);

    if (!user) return null;

    return user;
  }
}
