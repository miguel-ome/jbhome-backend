import { CreateCategoryUseCase } from '@app/useCases/category/createCategory.useCase';
import { Body, Controller, Post } from '@nestjs/common';
import { CreateCategoryDTO } from '../dto/createCategory';
import { UpdateCategoryUseCase } from '@app/useCases/category/updateCategory.useCase';
import { UpdateCategoryDTO } from '../dto/updateCategory';

@Controller('category')
export class CategoryController {
  constructor(
    private createCategoryUseCase: CreateCategoryUseCase,
    private updateCategoryUseCase: UpdateCategoryUseCase,
  ) {}

  @Post()
  async create(@Body() createCategoryDTO: CreateCategoryDTO) {
    const { name } = createCategoryDTO;
    await this.createCategoryUseCase.execute({ name });

    return {
      status: 200,
      body: {
        message: 'Categoria criada com sucesso',
      },
    };
  }

  @Post('update')
  async update(@Body() updateCategoryDTO: UpdateCategoryDTO) {
    const { id, name } = updateCategoryDTO;
    await this.updateCategoryUseCase.execute({ id, name });

    return {
      status: 200,
      body: {
        message: 'Categoria alterada com sucesso',
      },
    };
  }
}
