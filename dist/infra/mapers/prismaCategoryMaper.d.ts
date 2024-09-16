import { Category } from '@app/entities/category/category';
import { Category as RowCategory } from '@prisma/client';
export declare class PrismaCategoryMaper {
    static toPrisma(category: Category): {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date | null;
    };
    static toDomain(rowCategory: RowCategory): Category;
}
