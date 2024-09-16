"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpModule = void 0;
const database_module_1 = require("../database/database.module");
const common_1 = require("@nestjs/common");
const user_controller_1 = require("./controllers/user.controller");
const createUser_useCase_1 = require("../../app/useCases/user/createUser.useCase");
const findUserById_useCase_1 = require("../../app/useCases/user/findUserById.useCase");
const deleteUser_useCase_1 = require("../../app/useCases/user/deleteUser.useCase");
const authUser_useCase_1 = require("../../app/useCases/user/authUser.useCase");
const category_controller_1 = require("./controllers/category.controller");
const createCategory_useCase_1 = require("../../app/useCases/category/createCategory.useCase");
const updateCategory_useCase_1 = require("../../app/useCases/category/updateCategory.useCase");
const deleteCategory_useCase_1 = require("../../app/useCases/category/deleteCategory.useCase");
let HttpModule = class HttpModule {
};
exports.HttpModule = HttpModule;
exports.HttpModule = HttpModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [user_controller_1.UserController, category_controller_1.CategoryController],
        providers: [
            createUser_useCase_1.CreateUserUseCase,
            findUserById_useCase_1.FindUserByIdUseCase,
            deleteUser_useCase_1.DeleteUserUseCase,
            authUser_useCase_1.AuthUserUseCase,
            createCategory_useCase_1.CreateCategoryUseCase,
            updateCategory_useCase_1.UpdateCategoryUseCase,
            deleteCategory_useCase_1.DeleteCategoryUseCase,
        ],
    })
], HttpModule);
//# sourceMappingURL=http.module.js.map