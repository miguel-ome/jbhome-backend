import { Login } from '../login/login';
import { User } from './user';

describe('User', () => {
  it('Should be able to create a user', () => {
    const user = new User({
      name: 'Eliseu Miguel',
      login: new Login('miguelOME'),
      password: 'hkssret123',
    });

    expect(user).toBeTruthy();
  });
});
