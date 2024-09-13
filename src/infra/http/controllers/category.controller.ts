import { CreateCategoryUseCase } from '@app/useCases/category/createCategory.useCase';
import { Body, Controller, Delete, Post } from '@nestjs/common';
import { CreateCategoryDTO } from '../dto/category/createCategory';
import { UpdateCategoryUseCase } from '@app/useCases/category/updateCategory.useCase';
import { UpdateCategoryDTO } from '../dto/category/updateCategory';
import { DeleteCategoryDTO } from '../dto/category/deleteCategory';
import { DeleteCategoryUseCase } from '@app/useCases/category/deleteCategory.useCase';

@Controller('category')
export class CategoryController {
  constructor(
    private createCategoryUseCase: CreateCategoryUseCase,
    private updateCategoryUseCase: UpdateCategoryUseCase,
    private deleteCategoryUseCase: DeleteCategoryUseCase,
  ) {}

  @Post()
  async createCategory(@Body() createCategoryDTO: CreateCategoryDTO) {
    const { name } = createCategoryDTO;
    await this.createCategoryUseCase.execute({ name });

    return {
      status: 201,
      body: {
        message: 'Categoria criada com sucesso',
      },
    };
  }

  @Post('update')
  async updateCategory(@Body() updateCategoryDTO: UpdateCategoryDTO) {
    const { id, name } = updateCategoryDTO;
    await this.updateCategoryUseCase.execute({ id, name });

    return {
      status: 201,
      body: {
        message: 'Categoria alterada com sucesso',
      },
    };
  }

  @Delete('')
  async deleteCategory(@Body() deleteCategoryDTO: DeleteCategoryDTO) {
    const { id } = deleteCategoryDTO;
    await this.deleteCategoryUseCase.execute({ id });

    return {
      status: 200,
      body: {
        message: 'Categoria removida com sucesso',
      },
    };
  }
}
