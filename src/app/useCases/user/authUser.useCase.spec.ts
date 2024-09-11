import { UserRepositoryInMemory } from '@test/repositoryInMemory/user.repositoryInMemory';
import { AuthUserUseCase } from './authUser.useCase';
import { userFactory } from '@test/factory/user/makeUser.factory';
import { CreateUserUseCase } from './createUser.useCase';

describe('Auth User', () => {
  it('Should be able to make login and recive an access token', async () => {
    const userRepositoryInMemory = new UserRepositoryInMemory();
    const authUserUseCase = new AuthUserUseCase(userRepositoryInMemory);
    const createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);

    const userCreated = await userFactory();

    await createUserUseCase.execute({
      login: userCreated.login,
      name: userCreated.name,
      password: userCreated.password,
    });

    const { accessToken } = await authUserUseCase.execute({
      login: userCreated.login,
      password: userCreated.password,
    });

    expect(accessToken).toStrictEqual(expect.any(String));
  });

  it('Should not be able to make login beacuse the login not exist', async () => {
    const userRepositoryInMemory = new UserRepositoryInMemory();
    const authUserUseCase = new AuthUserUseCase(userRepositoryInMemory);
    const createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);

    const userCreated = await userFactory();

    await createUserUseCase.execute({
      login: userCreated.login,
      name: userCreated.name,
      password: userCreated.password,
    });

    expect(
      async () =>
        await authUserUseCase.execute({
          login: 'login_to_test',
          password: userCreated.password,
        }),
    ).rejects.toThrow();
  });

  it('Should not be able to make login beacuse the login not exist', async () => {
    const userRepositoryInMemory = new UserRepositoryInMemory();
    const authUserUseCase = new AuthUserUseCase(userRepositoryInMemory);
    const createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);

    const userCreated = await userFactory();

    await createUserUseCase.execute({
      login: userCreated.login,
      name: userCreated.name,
      password: userCreated.password,
    });

    expect(
      async () =>
        await authUserUseCase.execute({
          login: userCreated.login,
          password: 'password_to_test',
        }),
    ).rejects.toThrow();
  });
});
