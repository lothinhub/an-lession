import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
  students = [
    { name: 'John', gender: 'Female', address: 'PP' },
    { name: 'Lothin', gender: 'male', address: 'KPC' },
    { name: 'Johnsey', gender: 'Female', address: 'KPS' }
  ];
}
