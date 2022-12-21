import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-helper-login',
  templateUrl: './helper-login.component.html',
  styleUrls: ['./helper-login.component.css']
})
export class HelperLoginComponent {
  constructor(public helperService: HelperService) {  }

  loginhelper(data: {email: string, password: string}) {
    this.helperService.loginHelper(data).subscribe(
      (data:any) => console.log(data),
      (error: HttpErrorResponse) => {
        if(error.status === 202) {
          alert("Login Successful")
          window.sessionStorage.setItem("email", data.email);
          window.location.pathname="/helper"
        } else {
          alert(error.error)
        }
      }
    )
  }
}
