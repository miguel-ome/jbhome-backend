import { Login } from './login';

describe('Login', () => {
  it('Should be able to create a login', () => {
    const login = new Login('login_qualquer');

    expect(login.value).toBeTruthy();
  });

  it('Should not be able to create a login', () => {
    const login = new Login('login error');

    expect(login.value).not.toBeTruthy();
  });
});
