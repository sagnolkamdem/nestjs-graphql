import { Injectable } from '@nestjs/common';
import { Post } from '../models/post.model';

@Injectable()
export class PostsService {
  posts: Post[] = [
    {
      id: 1,
      title: 'Hello',
      votes: 10,
    },
    {
      id: 2,
      title: 'Hello',
      votes: 10,
    },
    {
      id: 3,
      title: 'Hello',
      votes: 10,
    },
    {
      id: 4,
      title: 'Hello',
      votes: 10,
    },
  ];

  //   async getPostsByUser(id: number): Promise<Post[]> {
  //     return
  //   }
}
