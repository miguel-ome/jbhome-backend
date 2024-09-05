import { User } from '@app/entities/user/user';
import { UserRepositoryInMemory } from '@test/repositoryInMemory/user.RepositoryInMemory';
import { userFactory } from './makeUser.factory';

interface AddUserInRepositoryMemoryProps {
  quantityUsers: number;
  userRepository: UserRepositoryInMemory;
  user?: User;
}

export async function addUserInRepositoryMemory({
  quantityUsers,
  userRepository,
  user,
}: AddUserInRepositoryMemoryProps): Promise<void> {
  switch (quantityUsers) {
    case 1:
      if (user) {
        userRepository.create(user);
        break;
      }
      await userFactory();
      break;
    default:
      if (user) {
        userRepository.create(user);
        for (let i = quantityUsers - 1; i > 0; i--) {
          userRepository.create(await userFactory());
          break;
        }
      }
      for (let i = quantityUsers; i > 0; i--) {
        userRepository.create(await userFactory());
        break;
      }
  }
}
