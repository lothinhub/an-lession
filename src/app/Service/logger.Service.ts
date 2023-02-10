import { Injectable } from "@angular/core";

@Injectable()
export class LogService {
  LogMessage(name: string, status: string) {
    console.log('A new user' + name + ',And Status ' + status + 'has been created successfully');
  }
}
