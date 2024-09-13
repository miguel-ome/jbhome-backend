import { CategoryRepository } from '@app/repository/category.repository';
import { Injectable } from '@nestjs/common';

interface DeleteCategoryUseCaseRequest {
  id: string;
}

type DeleteCategoryUseCaseResponse = void;

@Injectable()
export class DeleteCategoryUseCase {
  constructor(private categoryRepository: CategoryRepository) {}
  async execute({
    id,
  }: DeleteCategoryUseCaseRequest): Promise<DeleteCategoryUseCaseResponse> {
    await this.categoryRepository.delete(id);
  }
}
