export interface Budget {
  name: string;
  totalAmount: number;
  monthlyAllocation: number;
  userId: string;
}

export interface UpdateBudget extends Partial<Budget> {
  id: string;
}

export interface User {
  email: string;
  password: string;
  name: string;
  phoneNumber: string;
  role: string;
}

export interface UpdateUser extends Partial<User> {
  id: string;
}
export interface Expense {
  amount: number;
  category: string;
  description: string;
  userId: string;
  budgetId: string;
}

export interface Saving {
  amountSaved: number;
  goal: number;
  userId: string;
  budgetId: string;
}

export interface UpdateExpense extends Partial<Expense> {
  id: string;
}

export interface UpdateSaving extends Partial<Saving> {
  id: string;
}
