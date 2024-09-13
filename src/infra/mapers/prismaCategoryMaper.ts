import { Category } from '@app/entities/category/category';
import { Category as RowCategory } from '@prisma/client';

export class PrismaCategoryMaper {
  static toPrisma(category: Category) {
    return {
      id: category.id,
      name: category.name,
      createdAt: category.createdAt,
      updatedAt: category.updatedAt,
    };
  }

  static toDomain(rowCategory: RowCategory) {
    return new Category(
      {
        name: rowCategory.name,
        createdAt: rowCategory.createdAt,
        updatedAt: rowCategory.updatedAt,
      },
      rowCategory.id,
    );
  }
}
