import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  baseUrl = 'http://localhost:4200/assets/json/';

  constructor(private http: HttpClient) { }

  getList(): Observable<any> {
    return this.http.get(this.baseUrl + 'itemList.json', { responseType: 'text' });
  }
}
