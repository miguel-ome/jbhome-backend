"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserViewModel = void 0;
class UserViewModel {
    static toHttp(user) {
        return {
            id: user.id,
            login: user.login,
            name: user.name,
        };
    }
}
exports.UserViewModel = UserViewModel;
//# sourceMappingURL=userViewModel.js.map