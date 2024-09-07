import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { HttpModule } from './http/http.module';
import { JwtMiddleware } from './middlewares/JWT.middleware';
import { UserController } from './http/controllers/user.controller';

@Module({
  imports: [DatabaseModule, HttpModule],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(JwtMiddleware)
      .exclude(
        {
          path: 'user',
          method: RequestMethod.POST,
        },
        {
          path: 'user/signIn',
          method: RequestMethod.POST,
        },
      )
      .forRoutes(UserController);
  }
}
