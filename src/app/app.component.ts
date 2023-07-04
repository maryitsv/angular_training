import { Component } from '@angular/core';
import { LicensePlate } from './license-plate';
import { LicensePlateService } from './license-plate.service';
import { Observable, catchError, of } from 'rxjs';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  now = new Date();
  licensePlates$: Observable<LicensePlate[]> = of([]);
  showDialog = false;

  constructor(public licensePlateService: LicensePlateService, public cartService: CartService) {
    this.loadData();
    console.log('AppComponent constructor');
  }

  loadData() {
    this.licensePlates$ = this.licensePlateService.getList().pipe(
      /*tap(// tab is used for side efects
        data=> console.log(data)
      ),*/
      catchError(err => {
        console.log(err);
        return [];
      })
    );
  }

  licenseAddedToCart(license: LicensePlate) {
    this.cartService.addToCart(license).subscribe(response => {
      console.log('Plate added to cart', response)
      this.showDialog = true;
    });
  }

  dialogClosed() {
    this.showDialog = false;
  }
}
