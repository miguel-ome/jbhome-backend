import { Login } from '@app/entities/login/login';
import { User } from '@app/entities/user/user';
import { User as RowUser } from '@prisma/client';

export class PrismaUserMaper {
  static toPrisma(user: User) {
    return {
      id: user.id,
      login: user.login,
      name: user.name,
      password: user.password,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  static toDomain(rowUser: RowUser) {
    return new User(
      {
        login: new Login(rowUser.login),
        name: rowUser.name,
        password: rowUser.password,
        createdAt: rowUser.createdAt,
        updatedAt: rowUser.updatedAt,
      },
      rowUser.id,
    );
  }
}
