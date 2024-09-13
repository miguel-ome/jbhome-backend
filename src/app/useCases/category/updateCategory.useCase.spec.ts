import { CategoryRepositoryInMemory } from '@test/repositoryInMemory/category.repositoryInMemory';
import { UpdateCategoryUseCase } from './updateCategory.useCase';
import { CreateCategoryUseCase } from './createCategory.useCase';

describe('Update Category', () => {
  it('Should be able to update the category in repository', async () => {
    const categoryRepositoryInMemory = new CategoryRepositoryInMemory();
    const updateCategoryUseCase = new UpdateCategoryUseCase(
      categoryRepositoryInMemory,
    );
    const createCategoryUseCase = new CreateCategoryUseCase(
      categoryRepositoryInMemory,
    );

    const { category } = await createCategoryUseCase.execute({
      name: 'tecido',
    });

    await updateCategoryUseCase.execute({
      id: category.id,
      name: 'lençol',
    });

    expect(categoryRepositoryInMemory.categories[0].name).toBe('lençol');
    expect(categoryRepositoryInMemory.categories[0].updatedAt).toEqual(
      expect.any(Date),
    );
  });
});
