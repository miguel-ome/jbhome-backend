"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaUserMaper = void 0;
const login_1 = require("../../app/entities/login/login");
const user_1 = require("../../app/entities/user/user");
class PrismaUserMaper {
    static toPrisma(user) {
        return {
            id: user.id,
            login: user.login,
            name: user.name,
            password: user.password,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
        };
    }
    static toDomain(rowUser) {
        return new user_1.User({
            login: new login_1.Login(rowUser.login),
            name: rowUser.name,
            password: rowUser.password,
            createdAt: rowUser.createdAt,
            updatedAt: rowUser.updatedAt,
        }, rowUser.id);
    }
}
exports.PrismaUserMaper = PrismaUserMaper;
//# sourceMappingURL=prismaUserMaper.js.map