import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  checkLogin() {
    if(window.sessionStorage.getItem('email') != null) {
      document.getElementById('AdminLoginButton')!.style.display = "none";
      document.getElementById('HelperLoginButton')!.style.display = "none";
      document.getElementById('ConsumerLoginButton')!.style.display = "none";
      document.getElementById("LogoutButton")!.style.display = "block";
    }
  }

  logoutUser() {
    window.sessionStorage.removeItem("email");
    window.location.pathname="/"
  }
}
