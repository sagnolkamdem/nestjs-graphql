import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { User } from '../models/user.model';
import { UsersService } from '../service/users.service';

@Resolver(of => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(returns => [User])
  async getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }

  //   @ResolveField()
  //   async getPostsByUser(@Parent() user: User) {
  //     const { id } = user;
  //     return this.postsService.getPostsByUser({ authorId: id });
  //   }

  @Query(returns => User)
  async getUser(@Args('id', { type: () => Int }) id: number): Promise<User> {
    return this.usersService.getUser(id);
  }
}
