// src/app/pages/home/home.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="text-center">
      <h1 class="text-3xl font-bold mb-4">💸 Personal Expense Tracker</h1>
      <p class="text-gray-600">Track and manage your daily expenses effectively.</p>
    </section>
  `
})
export class HomeComponent {}
