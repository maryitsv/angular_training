import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  host: {// podemos poner aqui las entradas y salidas de la directiva o usr los decoradores
    '[style.background]':'backgroundColor',
    '(mouseover)':'onMouseOver()',
    '(mouseout)':'onMouseOut()',
  }
})
export class HighlightDirective {
  //@HostBinding('style.backgroundColor')
  backgroundColor:string = '';

  //@HostListener('mouseover')
  onMouseOver(){
    this.backgroundColor = '#F5F5F5';
  }

  //@HostListener('mouseout')
  onMouseOut(){
    this.backgroundColor = '';
  }

  constructor() {
  }

}
