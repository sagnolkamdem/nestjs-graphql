import { Module } from '@nestjs/common';
import { UsersResolver } from './resolver/users.resolver';
import { UsersService } from './service/users.service';

@Module({
  imports: [],
  controllers: [],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
