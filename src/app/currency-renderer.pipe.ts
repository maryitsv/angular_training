import { CurrencyPipe } from '@angular/common';
import { ElementRef, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyRenderer'
})
export class CurrencyRendererPipe implements PipeTransform {

  transform(value: number, currency:string='USD', exchange:number=1): unknown {
    return new CurrencyPipe('en-US').transform(value/exchange, currency,'symbol','1.0-2');
    /*
    let outValue:any = value;
    let preChar = '';
    let postChar = '';
    if (exchange){
      outValue = value /exchange;
    }

    outValue = Math.round(outValue);

    if (currency==='EUR'){
      postChar= ' E';
    }
    if (currency==='GBP'){
      preChar= 'F ';
    }
    if (currency==='USD'){
      preChar= '$ ';
    }
    
    return preChar + outValue + postChar;
    */
  }

}
