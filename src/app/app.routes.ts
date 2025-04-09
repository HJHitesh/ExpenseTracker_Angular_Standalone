import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ExpensesComponent } from './pages/expenses/expenses.component';
import { AddExpenseComponent } from './pages/add-expense/add-expense.component';
import { WeatherComponent } from './pages/weather/weather.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'expenses', component: ExpensesComponent },
  { path: 'add-expense', component: AddExpenseComponent },
  { path: 'weather', component: WeatherComponent }
];
