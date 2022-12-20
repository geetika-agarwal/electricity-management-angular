import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ConsumerService } from '../consumer.service';

@Component({
  selector: 'app-consumer-login',
  templateUrl: './consumer-login.component.html',
  styleUrls: ['./consumer-login.component.css']
})
export class ConsumerLoginComponent {

  constructor(public consumerService: ConsumerService) {  }

  loginconsumer(data: {email: string, password: string}) {
    this.consumerService.loginConsumer(data).subscribe(
      (data:any) => console.log(data),
      (error: HttpErrorResponse) => {
        if(error.status === 202) {
          alert("Login Successful")
          window.sessionStorage.setItem("email", data.email);
          window.location.pathname="/consumer"
        } else {
          alert(error.error)
        }
      }
    )
  }

}
