import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostsRepository } from './post.repository';

@Injectable()
export class PostsService {
  constructor(private readonly postsRepository: PostsRepository) {}
  async create(createPostDto: CreatePostDto) {
    const createOne = await this.postsRepository.createOne(createPostDto);
    return createOne;
  }

  async findAll() {
    const findAll = await this.postsRepository.findAll();

    return findAll;
  }

  async findOne(id: string) {
    const findOne = await this.postsRepository.findOne(id);

    return findOne;
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    const update = await this.postsRepository.updateOne(id, updatePostDto);
    return update;
  }

  async remove(id: string) {
    const remove = await this.postsRepository.deleteOne(id);
    return remove;
  }
}
