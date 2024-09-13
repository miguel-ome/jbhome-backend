import { UserRepositoryInMemory } from '@test/repositoryInMemory/user.repositoryInMemory';
import { CreateUserUseCase } from './createUser.useCase';

describe('Create User', () => {
  beforeAll(() => {
    process.env.SECRET_KEY_JWT = 'sua_chave_secreta';
  });

  it('Should be able to create the user in repository', async () => {
    const userRepositoryInMemory = new UserRepositoryInMemory();
    const createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);

    const createUserDTO = {
      login: 'miguel_OMEE',
      name: 'Eliseu Miguel',
      password: 'passwordTest',
    };

    const { user } = await createUserUseCase.execute({
      login: createUserDTO.login,
      name: createUserDTO.name,
      password: createUserDTO.password,
    });

    expect(userRepositoryInMemory.users.length).toBe(1);
    expect(userRepositoryInMemory.users[0]).toBe(user);
  });
});
