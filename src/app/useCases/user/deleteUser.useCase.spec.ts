import { UserRepositoryInMemory } from '@test/repositoryInMemory/user.RepositoryInMemory';
import { DeleteUserUseCase } from './deleteUser.useCase';
import { userFactory } from '@test/factory/user/makeUser.factory';
import { addUserInRepositoryMemory } from '@test/factory/user/addUserInRepositoryInMemory';

describe('Delete User', () => {
  it('Should be able to delete the user', async () => {
    const userRepositoryInMemory = new UserRepositoryInMemory();
    const deleteUserUseCase = new DeleteUserUseCase(userRepositoryInMemory);

    const user = await userFactory();

    await addUserInRepositoryMemory({
      quantityUsers: 3,
      userRepository: userRepositoryInMemory,
      user,
    });

    await deleteUserUseCase.execute({ id: user.id });

    expect(userRepositoryInMemory.users).not.toEqual(
      expect.arrayContaining([expect.objectContaining(user)]),
    );
  });

  it('Should make a error not found when try delete user', async () => {
    const userRepositoryInMemory = new UserRepositoryInMemory();
    const deleteUserUseCase = new DeleteUserUseCase(userRepositoryInMemory);

    await addUserInRepositoryMemory({
      quantityUsers: 3,
      userRepository: userRepositoryInMemory,
    });

    expect(
      async () => await deleteUserUseCase.execute({ id: 'id_test_to_error' }),
    ).rejects.toThrow();
  });
});
