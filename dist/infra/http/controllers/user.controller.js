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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const createUser_dto_1 = require("../dto/user/createUser.dto");
const createUser_useCase_1 = require("../../../app/useCases/user/createUser.useCase");
const findUserById_useCase_1 = require("../../../app/useCases/user/findUserById.useCase");
const userViewModel_1 = require("../view-models/userViewModel");
const deleteUser_useCase_1 = require("../../../app/useCases/user/deleteUser.useCase");
const signInUser_dto_1 = require("../dto/user/signInUser.dto");
const authUser_useCase_1 = require("../../../app/useCases/user/authUser.useCase");
let UserController = class UserController {
    constructor(createUserUseCase, findUserByIdUseCase, deleteUserUseCase, authUserUseCase) {
        this.createUserUseCase = createUserUseCase;
        this.findUserByIdUseCase = findUserByIdUseCase;
        this.deleteUserUseCase = deleteUserUseCase;
        this.authUserUseCase = authUserUseCase;
    }
    async create(body) {
        const { login, name, password } = body;
        const { accessToken, user } = await this.createUserUseCase.execute({
            login,
            name,
            password,
        });
        return {
            status: 201,
            body: {
                message: 'Usuário criado com sucesso',
                data: userViewModel_1.UserViewModel.toHttp(user),
                accessToken,
            },
        };
    }
    async signIn(body) {
        const { login, password } = body;
        const { accessToken } = await this.authUserUseCase.execute({
            login,
            password,
        });
        return {
            status: 200,
            body: {
                message: 'Login executado com sucesso',
                data: {
                    accessToken,
                },
            },
        };
    }
    async findUserById(userId) {
        const { user } = await this.findUserByIdUseCase.execute({
            id: userId,
        });
        return {
            status: 200,
            body: {
                message: 'Usuário encontrado com sucesso',
                data: userViewModel_1.UserViewModel.toHttp(user),
            },
        };
    }
    async deleteUser(userId) {
        await this.deleteUserUseCase.execute({
            id: userId,
        });
        return {
            status: 200,
            body: {
                message: 'Usuário deletado com sucesso',
            },
        };
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createUser_dto_1.CreateUserDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('/signIn'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signInUser_dto_1.SignInUserDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "signIn", null);
__decorate([
    (0, common_1.Get)('/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findUserById", null);
__decorate([
    (0, common_1.Delete)('/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteUser", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [createUser_useCase_1.CreateUserUseCase,
        findUserById_useCase_1.FindUserByIdUseCase,
        deleteUser_useCase_1.DeleteUserUseCase,
        authUser_useCase_1.AuthUserUseCase])
], UserController);
//# sourceMappingURL=user.controller.js.map