// src/app/components/weather/weather.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { WeatherService } from '../../services/weather-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  template: `
    <div *ngIf="weather">
      <h2>Weather in {{ weather.location.name }}</h2>
      <p>Temperature: {{ weather.current.temperature }}°C</p>
      <p>Weather Description: {{ weather.current.weather_descriptions[0] }}</p>
      <p>Wind Speed: {{ weather.current.wind_speed }} km/h</p>
    </div>

    <div *ngIf="errorMessage" class="text-red-500">{{ errorMessage }}</div>
  `
})
export class WeatherComponent implements OnInit {
  weather: any;
  errorMessage: string = "";

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.fetchWeather('New York');
  }

  fetchWeather(location: string) {
    this.weatherService.getWeather(location).subscribe(
      (data) => {
        this.weather = data;
        this.errorMessage = ''; // Clear error if data is received
      },
      (error) => {
        this.weather = null;
        this.errorMessage = 'Failed to fetch weather data. Please try again later.';
      }
    );
  }
}
