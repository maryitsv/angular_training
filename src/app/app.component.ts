import { Component, OnDestroy } from '@angular/core';
import {LicensePlate} from './license-plate';
import { LicensePlateService } from './license-plate.service';
import { CALIFORNIA_PLATE } from './mock-data';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnDestroy{
  now = new Date();
  licensePlates: LicensePlate[] = [];
  licensePlate: LicensePlate = CALIFORNIA_PLATE;
  subscription!: Subscription;

  constructor(public licensePlateService: LicensePlateService){
    this.loadData();
    this.createObservable();
  }

  loadData(){
    this.subscription = this.licensePlateService.getList()
    .subscribe(
      list => this.licensePlates = list,
      error=> console.error(error),
      ()=>console.log('completed')
      );
  }

  createObservable(){
    let obs = new Observable(observer => {
      observer.next(42);
      observer.complete();
    });
    obs.subscribe(result=>console.log(result));
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
