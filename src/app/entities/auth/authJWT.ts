import { sign } from 'jsonwebtoken';
import { env } from 'process';

export class AuthJWT {
  public static sign({ payload }: { payload: object }) {
    return sign(payload, env.SECRET_KEY_JWT, { expiresIn: 60 * 60 });
  }
}
