import { Injectable } from '@nestjs/common';
import { User } from '../models/user.model';

@Injectable()
export class UsersService {
  users: User[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Smith',
      email: 'john@example.com',
      password: 'password',
      posts: null,
    },
    {
      id: 2,
      firstName: 'John',
      lastName: 'Smith',
      email: 'john@example.com',
      password: 'password',
      posts: null,
    },
    {
      id: 3,
      firstName: 'John',
      lastName: 'Smith',
      email: 'john@example.com',
      password: 'password',
      posts: null,
    },
    {
      id: 4,
      firstName: 'John',
      lastName: 'Smith',
      email: 'john@example.com',
      password: 'password',
      posts: null,
    },
    {
      id: 5,
      firstName: 'John',
      lastName: 'Smith',
      email: 'john@example.com',
      password: 'password',
      posts: null,
    },
  ];

  async getUsers(): Promise<User[]> {
    return await this.users;
  }

  async getUser(id: number): Promise<User> {
    return await this.users.find(user => user.id == id);
  }
}
