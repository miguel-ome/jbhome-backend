import { Category } from '@app/entities/category/category';
import { CategoryRepository } from '@app/repository/category.repository';

export class CategoryRepositoryInMemory implements CategoryRepository {
  categories: Category[] = [];

  async create(category: Category): Promise<void> {
    await this.categories.push(category);
  }

  async save(newCategory: Category): Promise<void> {
    const isCategoryIndex = await this.categories.findIndex(
      (category) => category.id === newCategory.id,
    );

    if (isCategoryIndex < 0) throw new Error('Category is not found');

    this.categories[isCategoryIndex] = newCategory;
  }

  async findCategoryById(id: string): Promise<Category> {
    const isCategory = await this.categories.find(
      (category) => category.id === id,
    );

    if (!isCategory) throw new Error('Not found Category');

    return isCategory;
  }
}
