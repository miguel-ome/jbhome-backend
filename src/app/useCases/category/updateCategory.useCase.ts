import { Category } from '@app/entities/category/category';
import { CategoryRepository } from '@app/repository/category.repository';
import { Injectable } from '@nestjs/common';
import { NotFoundCategory } from '../errors/category/NotFoundCategory';

interface UpdateCategoryUseCaseRequest {
  id: string;
  name: string;
}

interface UpdateCategoryUseCaseResponse {
  category: Category;
}

@Injectable()
export class UpdateCategoryUseCase {
  constructor(private categoryRepository: CategoryRepository) {}
  async execute({
    name,
    id,
  }: UpdateCategoryUseCaseRequest): Promise<UpdateCategoryUseCaseResponse> {
    const category = await this.categoryRepository.findCategoryById(id);

    if (!category) throw new NotFoundCategory();

    category.name(name);

    await this.categoryRepository.save(category);
    return {
      category,
    };
  }
}
