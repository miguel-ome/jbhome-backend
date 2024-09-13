import { CategoryRepository } from '@app/repository/category.repository';
import { PrismaService } from '../prisma.service';
import { Category } from '@app/entities/category/category';
import { PrismaCategoryMaper } from '@infra/mapers/prismaCategoryMaper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaCategoryRepository implements CategoryRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(category: Category): Promise<void> {
    const rowCategory = PrismaCategoryMaper.toPrisma(category);

    await this.prisma.category.create({
      data: rowCategory,
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.category.delete({
      where: {
        id,
      },
    });
  }

  async findCategoryById(id: string): Promise<Category> {
    const rowCategory = await this.prisma.category.findUnique({
      where: {
        id,
      },
    });

    if (!rowCategory) throw new Error('Not found category');

    return PrismaCategoryMaper.toDomain(rowCategory);
  }

  async save(category: Category): Promise<void> {
    const rowCategory = PrismaCategoryMaper.toPrisma(category);

    await this.prisma.category.update({
      where: {
        id: rowCategory.id,
      },
      data: rowCategory,
    });
  }
}
