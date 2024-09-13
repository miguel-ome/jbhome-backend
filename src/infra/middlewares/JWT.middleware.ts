import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { NextFunction, Request } from 'express';
import { verify } from 'jsonwebtoken';
import { env } from 'process';

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['authorization'];
    if (!token) {
      throw new UnauthorizedException('Token not provided');
    }

    try {
      const decoded = verify(token, env.SECRET_KEY_JWT);
      req.body.user = decoded;
      next();
    } catch {
      throw new UnauthorizedException('Invalid or expired token');
    }
  }
}
