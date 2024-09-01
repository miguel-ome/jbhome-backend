import { Replace } from '@app/helpers/relpace';
import { randomUUID } from 'crypto';
import { Login } from '../login/login';

interface UserSchema {
  name: string;
  login: Login;
  password: string;
  createdAt: Date;
  updatedAt?: Date;
}

export class User {
  private _id: string;
  private props: UserSchema;

  constructor(props: Replace<UserSchema, { createdAt?: Date }>, id?: string) {
    this._id = id || randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt || new Date(),
    };
  }

  public get id(): string {
    return this._id;
  }

  public get name(): string {
    return this.props.name;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get login(): string {
    return this.props.login.value;
  }

  public set login(login: string) {
    this.props.login = new Login(login);
  }

  public get password(): string {
    return this.props.password;
  }

  public set password(pass: string) {
    this.props.password = pass;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get updatedAt(): Date | undefined {
    return this.props.updatedAt;
  }
}
