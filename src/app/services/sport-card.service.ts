import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SportCardService {
  constructor(private http: HttpClient) { }

  getAllCards() {
    return this.http.get('../assets/sportCards.json');
  }
}
