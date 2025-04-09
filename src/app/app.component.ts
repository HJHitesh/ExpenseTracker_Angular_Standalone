import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="bg-gray-800 text-white p-4 flex gap-4">
      <a routerLink="/" class="hover:underline">Home</a>
      <a routerLink="/expenses" class="hover:underline">Expenses</a>
      <a routerLink="/add-expense" class="hover:underline">Add Expense</a>
      <a routerLink="/weather" class="hover:underline">Weather-Update</a>
    </nav>
    <main class="p-6">
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent {}
