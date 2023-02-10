import { Component } from '@angular/core';
import { UserService } from '../Service/user.Service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  // providers:[UserService]
})
export class AddUserComponent {
  name: string = '';
  status: string = 'active';
  constructor(private userService: UserService) {
  }
  addUser() {
    this.userService.AddNewUser(this.name, this.status);
    // console.log(this.name);
  }
}

