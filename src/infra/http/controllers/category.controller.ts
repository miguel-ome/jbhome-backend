import { CreateCategoryUseCase } from '@app/useCases/category/createCategory.useCase';
import { Body, Controller, Post } from '@nestjs/common';
import { CreateCategoryDTO } from '../dto/createCategory';

@Controller('category')
export class CategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

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
}
