// src/app/pages/expenses/expenses.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseService, Expense } from '../../services/expense.service';

@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      <h2 class="text-2xl font-semibold mb-4">All Expenses</h2>
      <div *ngIf="expenses.length === 0" class="text-gray-500">No expenses added yet.</div>

      <div *ngFor="let expense of expenses" class="border p-4 rounded-lg shadow mb-4">
        <h3 class="text-xl font-semibold">{{ expense.title }}</h3>
        <p class="text-sm text-gray-600">Category: {{ expense.category }}</p>
        <p class="text-sm text-gray-600">Amount: ₹{{ expense.amount }}</p>
        <p class="text-sm text-gray-400">Date: {{ expense.date }}</p>
      </div>
    </section>
  `
})
export class ExpensesComponent implements OnInit {
  expenses: Expense[] = [];

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.expenses = this.expenseService.getAll();
  }
}
