import { Injectable } from "@angular/core";
import { LogService } from "./logger.Service";
@Injectable()
export class UserService {
  constructor(private logger: LogService) { }
  users = [
    { name: 'lothin', status: 'active' },
    { name: 'lythou', status: 'active' },
    { name: 'chanange', status: 'active' },
    { name: 'channern', status: 'active' }
  ]
    AddNewUser(name: string, status: string){
      this.users.push({ name: name, status: status});
      this.logger.LogMessage(name, status);
    }
}
