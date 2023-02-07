import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent {

  @ViewChild('dateInput')
  dateofbirth!: ElementRef;
  @ViewChild('ageInput')
  age!: ElementRef;

  calculateAge() {
    let dateofbirth = new Date(this.dateofbirth.nativeElement.value).getFullYear();
    let currentYear = new Date().getFullYear();
    let age = currentYear - dateofbirth;
    this.age.nativeElement.value = age;
  }

}
