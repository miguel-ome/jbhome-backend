import { CategoryRepositoryInMemory } from '@test/repositoryInMemory/category.repositoryInMemory';
import { CreateCategoryUseCase } from './createCategory.useCase';

describe('Create Category', () => {
  it('Should be able to create the category in repository', async () => {
    const categoryRepositoryInMemory = new CategoryRepositoryInMemory();
    const createCategoryUseCase = new CreateCategoryUseCase(
      categoryRepositoryInMemory,
    );

    const { category } = await createCategoryUseCase.execute({
      name: 'tecido',
    });

    expect(categoryRepositoryInMemory.categories.length).toBe(1);
    expect(categoryRepositoryInMemory.categories[0]).toBe(category);
  });
});
