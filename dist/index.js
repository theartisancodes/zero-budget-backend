"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server_1 = require("@apollo/server");
const express4_1 = require("@apollo/server/express4");
const graphql_1 = require("./graphql");
const prisma_1 = __importDefault(require("./config/prisma"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
const index = new server_1.ApolloServer({
    schema: graphql_1.schema
});
async function startApolloServer() {
    await index.start();
    app.use('/graphql', (0, express4_1.expressMiddleware)(index, {
        context: ({ req }) => {
            return Promise.resolve({
                prisma: prisma_1.default,
                user: req.user
            });
        }
    }));
    // Health check route
    app.get('/health', (req, res) => {
        res.status(200).json({ message: 'API is healthy!' });
    });
    // Start the Express index
    const port = process.env.PORT || 4000;
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}/graphql`);
    });
}
startApolloServer();
//# sourceMappingURL=index.js.map