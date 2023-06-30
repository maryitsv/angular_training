import { Component } from '@angular/core';
import { LicensePlate} from './license-plate';
import { LicensePlateService } from './license-plate.service';
import { Observable, catchError, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  now = new Date();
  licensePlates$: Observable<LicensePlate[]> = of([]);

  constructor(public licensePlateService: LicensePlateService){
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
}
