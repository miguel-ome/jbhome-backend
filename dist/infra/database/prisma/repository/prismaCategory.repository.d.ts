import { CategoryRepository } from '@app/repository/category.repository';
import { PrismaService } from '../prisma.service';
import { Category } from '@app/entities/category/category';
export declare class PrismaCategoryRepository implements CategoryRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(category: Category): Promise<void>;
    delete(id: string): Promise<void>;
    findCategoryById(id: string): Promise<Category>;
    save(category: Category): Promise<void>;
}
