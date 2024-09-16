import { CategoryRepository } from '@app/repository/category.repository';
interface DeleteCategoryUseCaseRequest {
    id: string;
}
type DeleteCategoryUseCaseResponse = void;
export declare class DeleteCategoryUseCase {
    private categoryRepository;
    constructor(categoryRepository: CategoryRepository);
    execute({ id, }: DeleteCategoryUseCaseRequest): Promise<DeleteCategoryUseCaseResponse>;
}
export {};
