"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Users_1 = require("../modals/Users");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const router = (0, express_1.Router)();
// --- SIGNUP: Create a new account ---
router.post("/v1/signup", async (req, res) => {
    try {
        const { email, name, password } = req.body;
        // 1. Check if user already exists
        const existingUser = await Users_1.UserModal.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ msg: "User already exists" });
        }
        // 2. Hash the password
        const hashedPassword = await bcryptjs_1.default.hash(password, 10); // 10 is the standard salt rounds
        // 3. Create user
        await Users_1.UserModal.create({
            email,
            name,
            password: hashedPassword
        });
        return res.status(201).json({ msg: "User created successfully" });
    }
    catch (error) {
        return res.status(500).json({ msg: "Server error during signup" });
    }
});
// --- LOGIN: Verify and get a Token ---
router.post("/v1/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const SECRET_KEY = process.env.SECRET_KEY;
        // Guard: Check if the Secret Key actually exists in .env
        if (!SECRET_KEY) {
            console.error("ERROR: SECRET_KEY is missing in .env file");
            return res.status(500).json({ msg: "Internal server configuration error" });
        }
        // 1. Find user
        const user = await Users_1.UserModal.findOne({ email });
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }
        // 2. Compare passwords
        const isMatch = await bcryptjs_1.default.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ msg: "Incorrect password" });
        }
        // 3. Generate Token
        const token = jsonwebtoken_1.default.sign({ _id: user._id }, SECRET_KEY, { expiresIn: '1h' });
        return res.json({ token, msg: "Login successful" });
    }
    catch (error) {
        return res.status(500).json({ msg: "Server error during login" });
    }
});
exports.default = router;
//# sourceMappingURL=authRoutes.js.map