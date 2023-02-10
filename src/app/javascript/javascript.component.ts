import { Component } from '@angular/core';
import { Enrolling } from '../Service/EnrollService';
@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css'],
  providers: [Enrolling]
})
export class JavascriptComponent {
  tittle: string ='Javascript Course';
  // javascript(){
  //     alert('Thanks for Enrolling the '+this.tittle);
  // }
  constructor(private enrolling:Enrolling ){

  }
  Onjs(){
    // const enrolling =new Enrolling();
    // enrolling.OnEnroll(this.tittle);
    this.enrolling.OnEnroll(this.tittle);
  }
}
