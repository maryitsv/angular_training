import { Injectable } from '@angular/core';
import { LICENSE_PLATES} from "./mock-data";
import { Observable, of } from 'rxjs';
import { LicensePlate } from './license-plate';

@Injectable({
  providedIn: 'root'
})
export class LicensePlateService {

  constructor() { }

  getList():Observable<LicensePlate[]>{
    return of(LICENSE_PLATES);
  }
}
