import { Injectable } from '@angular/core';

export interface Expense {
  id: number;
  title: string;
  amount: number;
  category: string;
  date: string;
}

@Injectable({ providedIn: 'root' })
export class ExpenseService {
  private expenses: Expense[] = [];

  getAll(): Expense[] {
    return this.expenses;
  }

  add(expense: Expense) {
    this.expenses.push({ ...expense, id: Date.now() });
  }
}
