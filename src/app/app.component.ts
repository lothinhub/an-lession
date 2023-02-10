import { Component, OnInit } from '@angular/core';
import { UserService } from './Service/user.Service';
import { LogService } from './Service/logger.Service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService,LogService],
})
export class AppComponent implements OnInit{
  title = 'an-lession';
  constructor(private userService: UserService, private logService: LogService){}

  ngOnInit(): void {
    this.users = this.userService.users;
  }

  users:{name:string,status:string}[]=[]

}
