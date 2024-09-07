import { User } from '@app/entities/user/user';
import { UserRepository } from '@app/repository/user.repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { PrismaUserMaper } from '@infra/mapers/prismaUserMaper';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(user: User): Promise<void> {
    const rowUser = PrismaUserMaper.toPrisma(user);
    await this.prisma.user.create({
      data: rowUser,
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }

  async findById(id: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) return null;
    return PrismaUserMaper.toDomain(user);
  }

  async findUserByLogin(login: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: {
        login,
      },
    });

    if (!user) return null;
    return PrismaUserMaper.toDomain(user);
  }
}
