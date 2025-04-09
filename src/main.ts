import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';  // Import your routes configuration
import { AppComponent } from './app/app.component';  // Import the root component

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),  // Set up routing for the app
    provideHttpClient()     // Enable HTTP client functionality
  ]
}).catch((err) => console.error(err));  // Catch and log any errors during bootstrapping
