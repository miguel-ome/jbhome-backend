"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("./database/database.module");
const http_module_1 = require("./http/http.module");
const JWT_middleware_1 = require("./middlewares/JWT.middleware");
const user_controller_1 = require("./http/controllers/user.controller");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(JWT_middleware_1.JwtMiddleware)
            .exclude({
            path: 'user',
            method: common_1.RequestMethod.POST,
        }, {
            path: 'user/signIn',
            method: common_1.RequestMethod.POST,
        })
            .forRoutes(user_controller_1.UserController);
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule, http_module_1.HttpModule],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map