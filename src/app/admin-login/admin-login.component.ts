import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  constructor(public adminService: AdminService) {  }
  
  loginadmin(data: {email: string, password: string}) {
    this.adminService.loginAdmin(data).subscribe(
      (data:any) => console.log(data),
      (error: HttpErrorResponse) => {
        if(error.status === 202) {
          alert("Login Successful")
          window.sessionStorage.setItem("email", data.email);
          window.location.pathname="/admin"
        } else {
          alert(error.error)
        }
      }
    )
  }

}
