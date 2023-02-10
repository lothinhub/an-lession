import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-bind-directive-property',
  templateUrl: './bind-directive-property.component.html',
  styleUrls: ['./bind-directive-property.component.css']
})
export class BindDirectivePropertyComponent {
  display: boolean = false;

  displayText() {
    this.display = true;
  }
}
