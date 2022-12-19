import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { Area } from '../area';
import { Consumer } from '../consumer';
import { ConsumerType } from '../consumer-type';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  areas: Area[] = []
  consumerType: ConsumerType[] = []

  constructor(public adminService: AdminService) {
    this.adminService.viewAreas().subscribe(areas =>  {
      this.areas = areas;
    });

    this.adminService.viewConsumerType().subscribe(ct =>  {
      this.consumerType = ct;
    });
  }

  closeRegistrationForm() {
    document.getElementById("register-consumer-form")!.style.display = "none";
  }

  showRegisterConsumerForm() {
    document.getElementById("register-consumer-form")!.style.display = "block";
  }

  // submitRegistrationForm() {
  //   const form = document.getElementById("register-consumer-form")?.querySelector("form")!
  //   form.onsubmit = (_) => {
  //     const data = new FormData(form);
  //     consumer:Consumer;
  //     consumer.setEmail(data.email as string);
  //   }
  // }
}
