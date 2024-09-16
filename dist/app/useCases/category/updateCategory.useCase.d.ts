import { Category } from '@app/entities/category/category';
import { CategoryRepository } from '@app/repository/category.repository';
interface UpdateCategoryUseCaseRequest {
    id: string;
    name: string;
}
interface UpdateCategoryUseCaseResponse {
    category: Category;
}
export declare class UpdateCategoryUseCase {
    private categoryRepository;
    constructor(categoryRepository: CategoryRepository);
    execute({ name, id, }: UpdateCategoryUseCaseRequest): Promise<UpdateCategoryUseCaseResponse>;
}
export {};
