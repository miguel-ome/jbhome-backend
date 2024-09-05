import { UserRepositoryInMemory } from '@test/repositoryInMemory/user.RepositoryInMemory';
import { FindUserByIdUseCase } from './findUserById.useCase';
import { userFactory } from '@test/factory/user/makeUser.factory';
import { addUserInRepositoryMemory } from '@test/factory/user/addUserInRepositoryInMemory';

describe('Find user by ID', () => {
  it('Should be able to find the user by ID in repository', async () => {
    const userRepositoryInMemory = new UserRepositoryInMemory();
    const findUserByIdUseCase = new FindUserByIdUseCase(userRepositoryInMemory);

    const createdUser = await userFactory();

    await addUserInRepositoryMemory({
      quantityUsers: 3,
      userRepository: userRepositoryInMemory,
      user: createdUser,
    });

    const { user } = await findUserByIdUseCase.execute({ id: createdUser.id });

    expect(user).toBe(createdUser);
  });

  it('Should not be able to find the user by ID in repository', async () => {
    const userRepositoryInMemory = new UserRepositoryInMemory();
    const findUserByIdUseCase = new FindUserByIdUseCase(userRepositoryInMemory);

    await addUserInRepositoryMemory({
      quantityUsers: 3,
      userRepository: userRepositoryInMemory,
    });

    expect(
      async () => await findUserByIdUseCase.execute({ id: 'id_test_to_error' }),
    ).rejects.toThrow();
  });
});
