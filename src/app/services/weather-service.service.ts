// src/app/services/weather-service.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // This makes sure the service is available app-wide
})
export class WeatherService {
  private apiUrl = 'http://api.weatherstack.com/current?access_key=cab12f1f973ae6c2abdd8a38541ab668';

  constructor(private http: HttpClient) {}

  getWeather(location: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}&query=${location}`);
  }
}
