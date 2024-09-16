"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaCategoryMaper = void 0;
const category_1 = require("../../app/entities/category/category");
class PrismaCategoryMaper {
    static toPrisma(category) {
        return {
            id: category.id,
            name: category.name,
            createdAt: category.createdAt,
            updatedAt: category.updatedAt,
        };
    }
    static toDomain(rowCategory) {
        return new category_1.Category({
            name: rowCategory.name,
            createdAt: rowCategory.createdAt,
            updatedAt: rowCategory.updatedAt,
        }, rowCategory.id);
    }
}
exports.PrismaCategoryMaper = PrismaCategoryMaper;
//# sourceMappingURL=prismaCategoryMaper.js.map