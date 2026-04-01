"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/auth", authRoutes_1.default);
async function start() {
    try {
        await mongoose_1.default.connect(process.env.DB_HOST);
        app.listen(process.env.PORT, () => {
            console.log(`Listening at port ${process.env.PORT}`);
        });
    }
    catch {
        console.log("Unable to connect to DB");
    }
}
start();
//# sourceMappingURL=server.js.map