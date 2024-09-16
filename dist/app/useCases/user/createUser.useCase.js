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
exports.CreateUserUseCase = void 0;
const login_1 = require("../../entities/login/login");
const user_1 = require("../../entities/user/user");
const authJWT_1 = require("../../entities/auth/authJWT");
const user_repository_1 = require("../../repository/user.repository");
const common_1 = require("@nestjs/common");
const bcrypt_1 = require("bcrypt");
let CreateUserUseCase = class CreateUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute({ login, name, password, }) {
        const user = new user_1.User({
            login: new login_1.Login(login),
            name,
            password: await (0, bcrypt_1.hash)(password, 10),
        });
        const payload = {
            sub: user.id,
        };
        const accessToken = authJWT_1.AuthJWT.sign({ payload });
        await this.userRepository.create(user);
        return {
            user,
            accessToken,
        };
    }
};
exports.CreateUserUseCase = CreateUserUseCase;
exports.CreateUserUseCase = CreateUserUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], CreateUserUseCase);
//# sourceMappingURL=createUser.useCase.js.map