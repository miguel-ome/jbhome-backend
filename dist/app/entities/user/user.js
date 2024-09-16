"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const crypto_1 = require("crypto");
const login_1 = require("../login/login");
class User {
    constructor(props, id) {
        this._id = id || (0, crypto_1.randomUUID)();
        this.props = {
            ...props,
            createdAt: props.createdAt || new Date(),
        };
    }
    get id() {
        return this._id;
    }
    get name() {
        return this.props.name;
    }
    set name(name) {
        this.props.name = name;
    }
    get login() {
        return this.props.login.value;
    }
    set login(login) {
        this.props.login = new login_1.Login(login);
    }
    get password() {
        return this.props.password;
    }
    set password(pass) {
        this.props.password = pass;
    }
    get createdAt() {
        return this.props.createdAt;
    }
    get updatedAt() {
        if (!this.props.updatedAt)
            return null;
        return this.props.updatedAt;
    }
}
exports.User = User;
//# sourceMappingURL=user.js.map