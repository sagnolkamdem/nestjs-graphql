import { HelloModule } from './hello/hello.module';
import { AppointmentModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    HelloModule,
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    AppointmentModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
