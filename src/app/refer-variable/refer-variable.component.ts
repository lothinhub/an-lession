import { Component } from '@angular/core';

@Component({
  selector: 'app-refer-variable',
  templateUrl: './refer-variable.component.html',
  styleUrls: ['./refer-variable.component.css']
})
export class ReferVariableComponent {

  Hello(say: HTMLInputElement) {
    alert('Hello ' + say.value);
  }
}
