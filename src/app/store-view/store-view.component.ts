import { Component } from '@angular/core';
import { LicensePlate } from '../license-plate';
import { Observable, catchError, of } from 'rxjs';
import { LicensePlateService } from '../license-plate.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-store-view',
  templateUrl: './store-view.component.html',
  styleUrls: ['./store-view.component.css']
})
export class StoreViewComponent {
  licensePlates$: Observable<LicensePlate[]> = of([]);
  showDialog = false;

  constructor(public licensePlateService: LicensePlateService, public cartService: CartService) {
    console.log('store');
    this.loadData();
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
