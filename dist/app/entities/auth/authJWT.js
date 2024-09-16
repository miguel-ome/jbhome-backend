"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthJWT = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const process_1 = require("process");
class AuthJWT {
    static sign({ payload }) {
        return (0, jsonwebtoken_1.sign)(payload, process_1.env.SECRET_KEY_JWT, { expiresIn: 60 * 60 });
    }
}
exports.AuthJWT = AuthJWT;
//# sourceMappingURL=authJWT.js.map