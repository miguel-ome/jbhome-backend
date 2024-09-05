import { UserRepositoryInMemory } from '@test/repositoryInMemory/user.RepositoryInMemory';
import { CreateUserUseCase } from './createUser.useCase';

describe('Create User', () => {
  it('Should be able to create the user in repository', async () => {
    const userRepositoryInMemory = new UserRepositoryInMemory();
    const createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);

    const { user } = await createUserUseCase.execute({
      login: 'miguel_OMEE',
      name: 'Eliseu Miguel',
      password: 'passwordTest',
    });

    expect(userRepositoryInMemory.users.length).toBe(1);
    expect(userRepositoryInMemory.users[0]).toBe(user);
  });
});
