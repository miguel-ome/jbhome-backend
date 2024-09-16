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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const createCategory_useCase_1 = require("../../../app/useCases/category/createCategory.useCase");
const common_1 = require("@nestjs/common");
const createCategory_1 = require("../dto/category/createCategory");
const updateCategory_useCase_1 = require("../../../app/useCases/category/updateCategory.useCase");
const updateCategory_1 = require("../dto/category/updateCategory");
const deleteCategory_1 = require("../dto/category/deleteCategory");
const deleteCategory_useCase_1 = require("../../../app/useCases/category/deleteCategory.useCase");
let CategoryController = class CategoryController {
    constructor(createCategoryUseCase, updateCategoryUseCase, deleteCategoryUseCase) {
        this.createCategoryUseCase = createCategoryUseCase;
        this.updateCategoryUseCase = updateCategoryUseCase;
        this.deleteCategoryUseCase = deleteCategoryUseCase;
    }
    async createCategory(createCategoryDTO) {
        const { name } = createCategoryDTO;
        await this.createCategoryUseCase.execute({ name });
        return {
            status: 201,
            body: {
                message: 'Categoria criada com sucesso',
            },
        };
    }
    async updateCategory(updateCategoryDTO) {
        const { id, name } = updateCategoryDTO;
        await this.updateCategoryUseCase.execute({ id, name });
        return {
            status: 201,
            body: {
                message: 'Categoria alterada com sucesso',
            },
        };
    }
    async deleteCategory(deleteCategoryDTO) {
        const { id } = deleteCategoryDTO;
        await this.deleteCategoryUseCase.execute({ id });
        return {
            status: 200,
            body: {
                message: 'Categoria removida com sucesso',
            },
        };
    }
    helloWorld() {
        return {
            message: 'Hellor World',
        };
    }
};
exports.CategoryController = CategoryController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createCategory_1.CreateCategoryDTO]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "createCategory", null);
__decorate([
    (0, common_1.Post)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [updateCategory_1.UpdateCategoryDTO]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "updateCategory", null);
__decorate([
    (0, common_1.Delete)(''),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [deleteCategory_1.DeleteCategoryDTO]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "deleteCategory", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "helloWorld", null);
exports.CategoryController = CategoryController = __decorate([
    (0, common_1.Controller)('category'),
    __metadata("design:paramtypes", [createCategory_useCase_1.CreateCategoryUseCase,
        updateCategory_useCase_1.UpdateCategoryUseCase,
        deleteCategory_useCase_1.DeleteCategoryUseCase])
], CategoryController);
//# sourceMappingURL=category.controller.js.map