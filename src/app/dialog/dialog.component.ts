import {ChangeDetectionStrategy, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent implements OnInit, OnChanges, OnDestroy,DoCheck {

  @Input()
  isOpen = false;

  @Input()
  title = "Title";

  @Output()
  onClose = new EventEmitter<string>();

  constructor(){
    console.log('DialogComponent Constructor');
  }
  
  ngOnChanges(changes:SimpleChanges) {
    console.log('DialogComponent NG ON CHANGES', changes);
  }

  ngOnInit(): void {
    console.log('DialogComponent NG ON INIT');
  }

  ngDoCheck(): void {
  //  console.log('DialogComponent NG ON DOCHECK');
  }

  ngOnDestroy(): void {
    console.log('DialogComponent NG ON DESTROY');
  }


  closePopup(): void {
    this.isOpen = false;
    this.onClose.emit('Pop-up window closed');
  }
}
