import { Component, OnInit } from '@angular/core';
import { GetCustomersService } from '../../shared/services/get-customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  result: any;

  constructor(private _fetchData: GetCustomersService) { }

  ngOnInit() {
    // console.log(this._fetchData.data);
    this.result = this._fetchData.data;
  }

}
