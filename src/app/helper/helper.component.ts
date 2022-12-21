import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { Consumer } from '../consumer';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-helper',
  templateUrl: './helper.component.html',
  styleUrls: ['./helper.component.css']
})
export class HelperComponent {

  consumers: Consumer[] = []

  consumer: string = ''
  constructor(public helperService: HelperService, public adminService: AdminService) {
    this.adminService.viewConsumers().subscribe(consumer => {
      this.consumers = consumer;
    })
  }

  addBill(data: {email: string, units: number}) {
    if(data.email === "" || data.units == 0) {
      alert("Enter all the bill details!!!")
    }
    else {
      this.helperService.AddBill(data).subscribe(
      (data:any) => console.log(data),
      (error: HttpErrorResponse) => {
        if(error.status === 202) {
          alert("Bill Added Successfully!!!")
          window.location.pathname="/helper"
        } else {
          alert(error.error)
        }
      }
    )
    }
  }
}
