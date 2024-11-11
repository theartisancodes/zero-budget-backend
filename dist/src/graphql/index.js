"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const userSchema_1 = require("./schemas/userSchema");
const budgetSchema_1 = require("./schemas/budgetSchema");
const savingsSchema_1 = require("./schemas/savingsSchema");
const expensesSchema_1 = require("./schemas/expensesSchema");
const profileViewerSchema_1 = require("./schemas/profileViewerSchema");
const userResolver_1 = require("./resolvers/userResolver");
const budgetResolver_1 = require("./resolvers/budgetResolver");
const savingsResolver_1 = require("./resolvers/savingsResolver");
const expensesResolver_1 = require("./resolvers/expensesResolver");
const profileViewerResolver_1 = require("./resolvers/profileViewerResolver");
const schema_1 = require("@graphql-tools/schema");
const merge_1 = require("@graphql-tools/merge");
const typeDefs = (0, merge_1.mergeTypeDefs)([
    userSchema_1.userSchema,
    budgetSchema_1.budgetSchema,
    savingsSchema_1.savingSchema,
    expensesSchema_1.expenseSchema,
    profileViewerSchema_1.profileViewerSchema
]);
const resolvers = (0, merge_1.mergeResolvers)([
    userResolver_1.userResolver,
    budgetResolver_1.budgetResolver,
    savingsResolver_1.savingResolver,
    expensesResolver_1.expenseResolver,
    profileViewerResolver_1.profileViewerResolver
]);
exports.schema = (0, schema_1.makeExecutableSchema)({ typeDefs, resolvers });
