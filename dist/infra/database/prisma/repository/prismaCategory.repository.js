"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaCategoryRepository = void 0;
const prisma_service_1 = require("../prisma.service");
const prismaCategoryMaper_1 = require("../../../mapers/prismaCategoryMaper");
const common_1 = require("@nestjs/common");
let PrismaCategoryRepository = class PrismaCategoryRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(category) {
        const rowCategory = prismaCategoryMaper_1.PrismaCategoryMaper.toPrisma(category);
        await this.prisma.category.create({
            data: rowCategory,
        });
    }
    async delete(id) {
        await this.prisma.category.delete({
            where: {
                id,
            },
        });
    }
    async findCategoryById(id) {
        const rowCategory = await this.prisma.category.findUnique({
            where: {
                id,
            },
        });
        if (!rowCategory)
            throw new Error('Not found category');
        return prismaCategoryMaper_1.PrismaCategoryMaper.toDomain(rowCategory);
    }
    async save(category) {
        const rowCategory = prismaCategoryMaper_1.PrismaCategoryMaper.toPrisma(category);
        await this.prisma.category.update({
            where: {
                id: rowCategory.id,
            },
            data: rowCategory,
        });
    }
};
exports.PrismaCategoryRepository = PrismaCategoryRepository;
exports.PrismaCategoryRepository = PrismaCategoryRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaCategoryRepository);
//# sourceMappingURL=prismaCategory.repository.js.map