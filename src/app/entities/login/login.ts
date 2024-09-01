export class Login {
  private readonly login: string;

  get value(): string {
    return this.login;
  }

  private validateLogin(login: string): boolean {
    const isValidLogin = login.trim().split(' ');
    if (isValidLogin.length > 1) return false;
    return true;
  }

  constructor(loginName: string) {
    const isLogin = this.validateLogin(loginName);
    if (isLogin) this.login = loginName;
  }
}
