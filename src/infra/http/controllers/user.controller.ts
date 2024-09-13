import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateUserDTO } from '../dto/createUser.dto';
import { CreateUserUseCase } from '@app/useCases/user/createUser.useCase';
import { FindUserByIdUseCase } from '@app/useCases/user/findUserById.useCase';
import { UserViewModel } from '../view-models/userViewModel';
import { DeleteUserUseCase } from '@app/useCases/user/deleteUser.useCase';
import { SignInDTO } from '../dto/signIn.dto';
import { AuthUserUseCase } from '@app/useCases/user/authUser.useCase';

@Controller('user')
export class UserController {
  constructor(
    private createUserUseCase: CreateUserUseCase,
    private findUserByIdUseCase: FindUserByIdUseCase,
    private deleteUserUseCase: DeleteUserUseCase,
    private authUserUseCase: AuthUserUseCase,
  ) {}

  // Not use Middleware JWT
  @Post()
  async create(@Body() body: CreateUserDTO) {
    const { login, name, password } = body;
    const { accessToken, user } = await this.createUserUseCase.execute({
      login,
      name,
      password,
    });

    return {
      status: 201,
      body: {
        message: 'Usuário criado com sucesso',
        data: UserViewModel.toHttp(user),
        accessToken,
      },
    };
  }

  // Not use Middleware JWT
  @Post('/signIn')
  async signIn(@Body() body: SignInDTO) {
    const { login, password } = body;

    const { accessToken } = await this.authUserUseCase.execute({
      login,
      password,
    });

    return {
      status: 200,
      body: {
        message: 'Login executado com sucesso',
        data: {
          accessToken,
        },
      },
    };
  }

  @Get('/:userId')
  async findUserById(@Param('userId') userId: string) {
    const { user } = await this.findUserByIdUseCase.execute({
      id: userId,
    });

    return {
      status: 200,
      body: {
        message: 'Usuário encontrado com sucesso',
        data: UserViewModel.toHttp(user),
      },
    };
  }

  @Delete('/:userId')
  async deleteUser(@Param('userId') userId: string) {
    await this.deleteUserUseCase.execute({
      id: userId,
    });

    return {
      status: 200,
      body: {
        message: 'Usuário deletado com sucesso',
      },
    };
  }
}
