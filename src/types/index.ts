export interface Budget {
  id?: string;
  name: string;
  totalAmount: number;
  monthlyAllocation: number;
  userId: string;
  savings?: Saving[];
  expenses?: Expense[];
}

export interface UpdateBudget extends Partial<Budget> {
  id: string;
}

export interface User {
  id?: string;
  email: string;
  password: string;
  userName?: string;
  phoneNumber?: string;
  role?: string;
  budgets?: Budget[];
  expenses?: Expense[];
  savings?: Saving[];
  viewers?: ProfileViewer[];
  viewing?: ProfileViewer[];
}

export interface UpdateUser extends Partial<User> {
  id: string;
}

export interface Expense {
  id?: string;
  amount: number;
  category: string;
  description: string;
  date?: Date;
  userId: string;
  budgetId: string;
  user?: User;
  budget?: Budget;
}

export interface UpdateExpense extends Partial<Expense> {
  id: string;
}

export interface Saving {
  id?: string;
  amountSaved: number;
  goal: number;
  userId: string;
  budgetId: string;
  user?: User;
  budget?: Budget;
}

export interface UpdateSaving extends Partial<Saving> {
  id: string;
}

export interface ProfileViewer {
  id?: string;
  userId?: string;
  viewerUserId?: string;
  user?: User;
  viewerUser?: User;
}
