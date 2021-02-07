import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { MessageModule } from './messages/message.module';
import { PostModule } from './posts/post.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [UserModule, MessageModule, PostModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class ProtectedModule {}