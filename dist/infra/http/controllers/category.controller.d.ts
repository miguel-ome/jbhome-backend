import { CreateCategoryUseCase } from '@app/useCases/category/createCategory.useCase';
import { CreateCategoryDTO } from '../dto/category/createCategory';
import { UpdateCategoryUseCase } from '@app/useCases/category/updateCategory.useCase';
import { UpdateCategoryDTO } from '../dto/category/updateCategory';
import { DeleteCategoryDTO } from '../dto/category/deleteCategory';
import { DeleteCategoryUseCase } from '@app/useCases/category/deleteCategory.useCase';
export declare class CategoryController {
    private createCategoryUseCase;
    private updateCategoryUseCase;
    private deleteCategoryUseCase;
    constructor(createCategoryUseCase: CreateCategoryUseCase, updateCategoryUseCase: UpdateCategoryUseCase, deleteCategoryUseCase: DeleteCategoryUseCase);
    createCategory(createCategoryDTO: CreateCategoryDTO): Promise<{
        status: number;
        body: {
            message: string;
        };
    }>;
    updateCategory(updateCategoryDTO: UpdateCategoryDTO): Promise<{
        status: number;
        body: {
            message: string;
        };
    }>;
    deleteCategory(deleteCategoryDTO: DeleteCategoryDTO): Promise<{
        status: number;
        body: {
            message: string;
        };
    }>;
    helloWorld(): {
        message: string;
    };
}
