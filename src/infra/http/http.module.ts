import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { CreateUserUseCase } from '@app/useCases/user/createUser.useCase';
import { FindUserByIdUseCase } from '@app/useCases/user/findUserById.useCase';
import { DeleteUserUseCase } from '@app/useCases/user/deleteUser.useCase';
import { AuthUserUseCase } from '@app/useCases/user/authUser.useCase';
import { CategoryController } from './controllers/category.controller';
import { CreateCategoryUseCase } from '@app/useCases/category/createCategory.useCase';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController, CategoryController],
  providers: [
    CreateUserUseCase,
    FindUserByIdUseCase,
    DeleteUserUseCase,
    AuthUserUseCase,
    CreateCategoryUseCase,
  ],
})
export class HttpModule {}
