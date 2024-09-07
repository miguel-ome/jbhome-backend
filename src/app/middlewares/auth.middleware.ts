import { sign } from 'jsonwebtoken';

export class JWTAuth {
  public static sign({ payload }: { payload: object }) {
    return sign(payload, 'teste_key_secret', { expiresIn: 60 * 60 });
  }
}
