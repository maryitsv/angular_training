import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LicensePlate } from './license-plate';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LicensePlateService {

  constructor(public httpClient: HttpClient) { }

  getList():Observable<LicensePlate[]>{
   return this.httpClient.get<LicensePlate[]>('http://localhost:8000/data');
  }
}
