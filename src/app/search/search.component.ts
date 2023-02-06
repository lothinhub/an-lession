import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  Display: String = '...';
  EventBindingChange(e: any) {
    console.log(e.target.value);
    this.Display = e.target.value;
  }
  TwoWayBinding:String = 'twoWay';
  Twoway(e:any){
    this.TwoWayBinding =e.target.value;
  }
}
