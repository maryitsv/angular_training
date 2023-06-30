import { Injectable } from '@angular/core';
import { Currency } from './currency-switcher/currency';
import { HttpClient } from '@angular/common/http';
import { Observable, subscribeOn } from 'rxjs';

interface ExchangeRate {
  USD?:number;
  GBP?:number;
  EUR?:number;
}

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  currency: Currency = 'USD';
  rate: number = 1;
  rates:ExchangeRate = {};

  constructor(public httpClient: HttpClient) {
    this.getRates();
  }

  getRates(){
    this.httpClient.get<ExchangeRate>('http://localhost:8000/rates').subscribe(
      rates=> this.rates = rates
    );
  }

  getCurrency(): Currency {
    return this.currency;
  }

  setCurrency(currency: Currency) {
    this.currency = currency;
  }

  getRate(){
    return this.rates[this.currency] || 1;
  }
}
