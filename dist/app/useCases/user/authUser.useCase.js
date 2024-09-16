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
exports.AuthUserUseCase = void 0;
const user_repository_1 = require("../../repository/user.repository");
const NotFoundUser_1 = require("../errors/user/NotFoundUser");
const bcrypt_1 = require("bcrypt");
const IncorrectPassword_1 = require("../errors/user/IncorrectPassword");
const common_1 = require("@nestjs/common");
const authJWT_1 = require("../../entities/auth/authJWT");
let AuthUserUseCase = class AuthUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute({ login, password, }) {
        const user = await this.userRepository.findUserByLogin(login);
        if (!user)
            throw new NotFoundUser_1.NotFoundUser();
        const isValidUser = await (0, bcrypt_1.compare)(password, user.password);
        if (!isValidUser)
            throw new IncorrectPassword_1.IncorrectPassword();
        const payload = {
            sub: user.id,
        };
        const accessToken = authJWT_1.AuthJWT.sign({ payload });
        return {
            accessToken,
        };
    }
};
exports.AuthUserUseCase = AuthUserUseCase;
exports.AuthUserUseCase = AuthUserUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], AuthUserUseCase);
//# sourceMappingURL=authUser.useCase.js.map