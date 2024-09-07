import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { NextFunction, Request } from 'express';
import { verify } from 'jsonwebtoken';

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['authorization'];
    if (!token) {
      throw new UnauthorizedException('Token not provided');
    }

    try {
      const decoded = verify(token, 'teste_key_secret');
      req.body.user = decoded;
      next();
    } catch {
      throw new UnauthorizedException('Invelid or expired token');
    }
  }
}
