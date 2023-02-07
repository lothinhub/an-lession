import { Component } from '@angular/core';
import { customer } from './customer';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent {
  selectnameCustomer: any;
  Customer: customer[] = [

    { customerNo: 1, name: 'lothin', address: '123 ,Bkk1', city: 'Phnompenh', country: 'Cambodia' },
    { customerNo: 2, name: 'lythou', address: '123 ,Bkk1', city: 'kp', country: 'Cambodia' },
    { customerNo: 3, name: 'channag', address: '123 ,Bkk1', city: 'kpt', country: 'Cambodia' },
    { customerNo: 4, name: 'channern', address: '123 ,Bkk1', city: 'bkk', country: 'Cambodia' },
    { customerNo: 5, name: 'pao', address: '123 ,Bkk1', city: 'sr', country: 'Cambodia' },
    { customerNo: 6, name: 'thouen', address: '123 ,Bkk1', city: 'pp', country: 'Cambodia' },
    { customerNo: 7, name: 'heang', address: '123 ,Bkk1', city: 'kpc', country: 'Cambodia' }

  ];
}
