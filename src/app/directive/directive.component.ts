import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
  students = [
    { name: 'Tem Thouen', gender: 'Male', address: 'PP', status: 'active' },
    { name: 'Mang Pao', gender: 'Female', address: 'KPC', status: 'active' },
    { name: 'THouen Lythou', gender: 'Male', address: 'Korean', status: 'active' },
    { name: 'Thouen Channage', gender: 'Female', address: 'KPT', status: 'active' },
    { name: 'THouen Channern', gender: 'Female', address: 'KPC', status: 'active' },
    { name: 'THOUEN LOTHIN', gender: 'Male', address: 'Phnompenh', status: 'active' },
    { name: 'Jim SO Chea', gender: 'Male', address: 'KPC', status: 'inactive' },
    { name: 'Chea Panna', gender: 'Female', address: 'KPC', status: 'inactive' },
    { name: 'Chea Chetra', gender: 'Male', address: 'KPS', status: 'inactive' },
    { name: 'Rate Barang', gender: 'Female', address: 'KPC', status: 'inactive' }
  ];
}
