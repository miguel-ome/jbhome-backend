import { Login } from '@app/entities/login/login';
import { User, UserSchema } from '@app/entities/user/user';
import { hash } from 'bcrypt';

type Override = Partial<UserSchema>;

export async function userFactory(override: Override = {}) {
  return new User({
    login: new Login('mguel_ome'),
    name: 'Eliseu Miguel',
    password: await hash('hkssret123', 10),
    ...override,
  });
}
