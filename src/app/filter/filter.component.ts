import { Component, EventEmitter, Input,Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input() all: number = 0;
  @Input() free: number = 0;
  @Input() primium: number = 0;
  @Input() trial: number = 0;

  selectall:string="All";

  @Output()
  filtersRadioChange: EventEmitter<String> = new EventEmitter<String>();
  onRadioChange(){
    this.filtersRadioChange.emit(this.selectall);
    // console.log(this.selectall);
  }

}
