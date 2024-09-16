import { Category } from '@app/entities/category/category';
import { CategoryRepository } from '@app/repository/category.repository';
interface CreateCategoryUseCaseRequest {
    name: string;
}
interface CreateCategoryUseCaseResponse {
    category: Category;
}
export declare class CreateCategoryUseCase {
    private categoryRepository;
    constructor(categoryRepository: CategoryRepository);
    execute({ name, }: CreateCategoryUseCaseRequest): Promise<CreateCategoryUseCaseResponse>;
}
export {};
