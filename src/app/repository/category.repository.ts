import { Category } from '@app/entities/category/category';

export abstract class CategoryRepository {
  abstract create(category: Category): Promise<void>;
  abstract save(category: Category): Promise<void>;
  abstract findCategoryById(id: string): Promise<Category>;
  abstract delete(id: string): Promise<void>;
}
