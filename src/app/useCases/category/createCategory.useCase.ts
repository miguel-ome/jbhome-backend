import { Category } from '@app/entities/category/category';
import { CategoryRepository } from '@app/repository/category.repository';
import { Injectable } from '@nestjs/common';

interface CreateCategoryUseCaseRequest {
  name: string;
}

interface CreateCategoryUseCaseResponse {
  category: Category;
}

@Injectable()
export class CreateCategoryUseCase {
  constructor(private categoryRepository: CategoryRepository) {}
  async execute({
    name,
  }: CreateCategoryUseCaseRequest): Promise<CreateCategoryUseCaseResponse> {
    const category = new Category({ name });

    await this.categoryRepository.create(category);

    return {
      category,
    };
  }
}
