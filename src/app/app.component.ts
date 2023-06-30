import { Component } from '@angular/core';
import { LicensePlate} from './license-plate';
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

  constructor(public licensePlateService: LicensePlateService, public cartService:CartService){
    this.loadData()
  }

  loadData(){
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

  licenseAddedToCart(license:LicensePlate) {
    this.cartService.addToCart(license);
  }
}
