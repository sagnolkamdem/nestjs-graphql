import { Module } from '@nestjs/common';
import { HelloResolver } from './resolver/hello.resolver';

@Module({
  imports: [],
  controllers: [],
  providers: [HelloResolver],
})
export class HelloModule {}
