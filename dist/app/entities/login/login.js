"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
class Login {
    get value() {
        return this.login;
    }
    validateLogin(login) {
        const isValidLogin = login.trim().split(' ');
        if (isValidLogin.length > 1)
            return false;
        return true;
    }
    constructor(loginName) {
        const isLogin = this.validateLogin(loginName);
        if (isLogin)
            this.login = loginName;
    }
}
exports.Login = Login;
//# sourceMappingURL=login.js.map