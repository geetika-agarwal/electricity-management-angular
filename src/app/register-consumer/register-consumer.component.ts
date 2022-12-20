import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { Area } from '../area';
import { ConsumerType } from '../consumer-type';
import { ConsumerService } from '../consumer.service';

@Component({
  selector: 'app-register-consumer',
  templateUrl: './register-consumer.component.html',
  styleUrls: ['./register-consumer.component.css']
})
export class RegisterConsumerComponent {

  areas: Area[] = [];
  consumerType: ConsumerType[] = []
  areaName: string = ""
  consumerTypeName: string = ""

  constructor(public consumerService: ConsumerService, public adminService: AdminService)  {
    this.adminService.viewAreas().subscribe(areas =>  {
      this.areas = areas;
    });

    this.adminService.viewConsumerType().subscribe(ct =>  {
      this.consumerType = ct;
    });
  }

  registerconsumer(data: {email: string, password: string}) {
    this.consumerService.registerConsumer(data).subscribe(
      (data:any) => console.log(data),
      (error: HttpErrorResponse) => {
        if(error.status === 202) {
          alert("Register Successful")
          window.location.pathname="/adminLogin"
        } else {
          alert(error.error)
        }
      }
    )
  }

}
