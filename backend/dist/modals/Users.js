"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModal = void 0;
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    email: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true }
});
exports.UserModal = (0, mongoose_1.model)("users", UserSchema);
//# sourceMappingURL=Users.js.map