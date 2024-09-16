"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./prisma/prisma.service");
const user_repository_1 = require("../../app/repository/user.repository");
const prismaUser_repository_1 = require("./prisma/repository/prismaUser.repository");
const category_repository_1 = require("../../app/repository/category.repository");
const prismaCategory_repository_1 = require("./prisma/repository/prismaCategory.repository");
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Module)({
        providers: [
            prisma_service_1.PrismaService,
            {
                provide: user_repository_1.UserRepository,
                useClass: prismaUser_repository_1.PrismaUserRepository,
            },
            {
                provide: category_repository_1.CategoryRepository,
                useClass: prismaCategory_repository_1.PrismaCategoryRepository,
            },
        ],
        exports: [user_repository_1.UserRepository, category_repository_1.CategoryRepository],
    })
], DatabaseModule);
//# sourceMappingURL=database.module.js.map