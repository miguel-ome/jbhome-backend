import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UserRepository } from '@app/repository/user.repository';
import { PrismaUserRepository } from './prisma/repository/prismaUser.repository';
import { CategoryRepository } from '@app/repository/category.repository';
import { PrismaCategoryRepository } from './prisma/repository/prismaCategory.repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
    {
      provide: CategoryRepository,
      useClass: PrismaCategoryRepository,
    },
  ],
  exports: [UserRepository, CategoryRepository],
})
export class DatabaseModule {}
