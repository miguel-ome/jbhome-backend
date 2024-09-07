import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { CreateUserUseCase } from '@app/useCases/user/createUser.useCase';
import { FindUserByIdUseCase } from '@app/useCases/user/findUserById.useCase';
import { DeleteUserUseCase } from '@app/useCases/user/deleteUser.useCase';
import { AuthUserUseCase } from '@app/useCases/user/authUser.useCase';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [
    CreateUserUseCase,
    FindUserByIdUseCase,
    DeleteUserUseCase,
    AuthUserUseCase,
  ],
})
export class HttpModule {}
