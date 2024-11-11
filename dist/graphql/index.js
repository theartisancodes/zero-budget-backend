import { userSchema } from './schemas/userSchema';
import { budgetSchema } from './schemas/budgetSchema';
import { savingSchema } from './schemas/savingsSchema';
import { expenseSchema } from './schemas/expensesSchema';
import { profileViewerSchema } from './schemas/profileViewerSchema';
import { userResolver } from './resolvers/userResolver';
import { budgetResolver } from './resolvers/budgetResolver';
import { savingResolver } from './resolvers/savingsResolver';
import { expenseResolver } from './resolvers/expensesResolver';
import { profileViewerResolver } from './resolvers/profileViewerResolver';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';
const typeDefs = mergeTypeDefs([
    userSchema,
    budgetSchema,
    savingSchema,
    expenseSchema,
    profileViewerSchema
]);
const resolvers = mergeResolvers([
    userResolver,
    budgetResolver,
    savingResolver,
    expenseResolver,
    profileViewerResolver
]);
export const schema = makeExecutableSchema({ typeDefs, resolvers });
//# sourceMappingURL=index.js.map