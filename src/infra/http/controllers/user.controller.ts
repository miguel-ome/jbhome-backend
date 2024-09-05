import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateUserDTO } from '../dto/createUser.dto';
import { CreateUserUseCase } from '@app/useCases/user/createUser.useCase';
import { FindUserByIdUseCase } from '@app/useCases/user/findUserById.useCase';
import { UserViewModel } from '../view-models/userViewModel';
import { DeleteUserUseCase } from '@app/useCases/user/deleteUser.useCase';

@Controller('user')
export class UserController {
  constructor(
    private createUserUseCase: CreateUserUseCase,
    private findUserByIdUseCase: FindUserByIdUseCase,
    private deleteUserUseCase: DeleteUserUseCase,
  ) {}

  @Post()
  async create(@Body() body: CreateUserDTO) {
    const { login, name, password } = body;
    const { user } = await this.createUserUseCase.execute({
      login,
      name,
      password,
    });

    return UserViewModel.toHttp(user);
  }

  @Get('/:userId')
  async findUserById(@Param('userId') userId: string) {
    const { user } = await this.findUserByIdUseCase.execute({
      id: userId,
    });

    return UserViewModel.toHttp(user);
  }

  @Delete('/:userId')
  async deleteUser(@Param('userId') userId: string) {
    await this.deleteUserUseCase.execute({
      id: userId,
    });

    return {
      message: 'Usuário deletado com sucesso',
    };
  }
}
