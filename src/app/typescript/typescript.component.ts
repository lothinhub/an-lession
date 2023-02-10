import { Component } from '@angular/core';
import { Enrolling } from '../Service/EnrollService';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.css'],
  providers: [Enrolling]
})
export class TypescriptComponent {
  tittle: string ='Typescript Course';
  // typescript(){
  //     alert('Thanks for Enrolling the '+this.tittle);
  // }
  constructor(private enrolling: Enrolling){

  }
  Onts(){
    // const enrolling =new Enrolling();
    // enrolling.OnEnroll(this.tittle);
    this.enrolling.OnEnroll(this.tittle);
  }
}
