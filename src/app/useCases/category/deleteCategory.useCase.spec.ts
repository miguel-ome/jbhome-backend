import { CategoryRepositoryInMemory } from '@test/repositoryInMemory/category.repositoryInMemory';
import { DeleteCategoryUseCase } from './deleteCategory.useCase';
import { Category } from '@app/entities/category/category';

let categoryRepositoryInMemory: CategoryRepositoryInMemory;
let deleteCategoryUseCase: DeleteCategoryUseCase;

describe('Delete category', () => {
  beforeAll(() => {
    categoryRepositoryInMemory = new CategoryRepositoryInMemory();
    deleteCategoryUseCase = new DeleteCategoryUseCase(
      categoryRepositoryInMemory,
    );
  });
  it('Should be able delete a category in repository memory', async () => {
    const category = new Category({ name: 'teste_name_category' });
    await categoryRepositoryInMemory.create(category);

    expect(categoryRepositoryInMemory.categories.length).toBe(1);

    await deleteCategoryUseCase.execute({ id: category.id });

    expect(categoryRepositoryInMemory.categories.length).toBe(0);
  });
});
