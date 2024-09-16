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
exports.UpdateCategoryUseCase = void 0;
const category_repository_1 = require("../../repository/category.repository");
const common_1 = require("@nestjs/common");
const NotFoundCategory_1 = require("../errors/category/NotFoundCategory");
let UpdateCategoryUseCase = class UpdateCategoryUseCase {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    async execute({ name, id, }) {
        const category = await this.categoryRepository.findCategoryById(id);
        if (!category)
            throw new NotFoundCategory_1.NotFoundCategory();
        category.name = name;
        await this.categoryRepository.save(category);
        return {
            category,
        };
    }
};
exports.UpdateCategoryUseCase = UpdateCategoryUseCase;
exports.UpdateCategoryUseCase = UpdateCategoryUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [category_repository_1.CategoryRepository])
], UpdateCategoryUseCase);
//# sourceMappingURL=updateCategory.useCase.js.map