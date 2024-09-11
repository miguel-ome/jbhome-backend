import { sign } from 'jsonwebtoken';
import { SECRET_KEY_JWT } from '../../../../secret/keyJWT';

export class AuthJWT {
  public static sign({ payload }: { payload: object }) {
    return sign(payload, SECRET_KEY_JWT, { expiresIn: 60 * 60 });
  }
}
