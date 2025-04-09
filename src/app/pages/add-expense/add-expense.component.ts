import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ExpenseService } from '../../services/expense.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-expense',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <h2 class="text-2xl font-semibold mb-4">Add New Expense</h2>
    <form [formGroup]="expenseForm" (ngSubmit)="onSubmit()" class="max-w-md space-y-4">
  <div>
    <label class="block text-sm font-medium">Title</label>
    <input class="w-full border p-2 rounded" formControlName="title" />
    <div *ngIf="submitted && f['title'].errors" class="text-red-500 text-sm">Title is required</div>
  </div>

  <div>
    <label class="block text-sm font-medium">Amount</label>
    <input type="number" class="w-full border p-2 rounded" formControlName="amount" />
    <div *ngIf="submitted && f['amount'].errors" class="text-red-500 text-sm">Amount is required</div>
  </div>

  <div>
    <label class="block text-sm font-medium">Category</label>
    <input class="w-full border p-2 rounded" formControlName="category" />
    <div *ngIf="submitted && f['category'].errors" class="text-red-500 text-sm">Category is required</div>
  </div>

  <div>
    <label class="block text-sm font-medium">Date</label>
    <input type="date" class="w-full border p-2 rounded" formControlName="date" />
    <div *ngIf="submitted && f['date'].errors" class="text-red-500 text-sm">Date is required</div>
  </div>

  <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">Add Expense</button>
</form>
  `
})
export class AddExpenseComponent implements OnInit {
  submitted = false;
  expenseForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private expenseService: ExpenseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.expenseForm = this.fb.group({
      title: ['', Validators.required],
      amount: [null, Validators.required],
      category: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  get f() {
    return this.expenseForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.expenseForm.valid) {

      this.expenseService.add({
        ...this.expenseForm.value,
        id: Date.now()
      });
      this.router.navigate(['/expenses']);
    }
  }
}
