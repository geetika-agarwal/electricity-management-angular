import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-helper',
  templateUrl: './helper.component.html',
  styleUrls: ['./helper.component.css']
})
export class HelperComponent {

  constructor(public helperService: HelperService) {}

  addBill(data: {email: string, units: number}) {
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
