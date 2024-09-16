"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const crypto_1 = require("crypto");
class Category {
    validateName(name) {
        return name.length <= 1 ? false : true;
    }
    constructor(props, id) {
        const categoryIsValid = this.validateName(props.name);
        if (!categoryIsValid)
            throw new Error('Name with invalid format');
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
    set name(value) {
        this.props.name = value;
        this.update();
    }
    get createdAt() {
        return this.props.createdAt;
    }
    get updatedAt() {
        if (!this.props.updatedAt)
            return null;
        return this.props.updatedAt;
    }
    update() {
        this.props.updatedAt = new Date();
    }
}
exports.Category = Category;
//# sourceMappingURL=category.js.map