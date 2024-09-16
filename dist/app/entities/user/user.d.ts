import { Replace } from '@app/helpers/relpace';
import { Login } from '../login/login';
export interface UserSchema {
    name: string;
    login: Login;
    password: string;
    createdAt: Date;
    updatedAt?: Date | null;
}
export declare class User {
    private _id;
    private props;
    constructor(props: Replace<UserSchema, {
        createdAt?: Date;
    }>, id?: string);
    get id(): string;
    get name(): string;
    set name(name: string);
    get login(): string;
    set login(login: string);
    get password(): string;
    set password(pass: string);
    get createdAt(): Date;
    get updatedAt(): Date | null;
}
