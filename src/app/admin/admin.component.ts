import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { Area } from '../area';
import { City } from '../city';
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
  cities: City[] = []
  consumers: Consumer[] = []

  constructor(public adminService: AdminService) {
    this.adminService.viewAreas().subscribe(areas =>  {
      this.areas = areas;
    });

    this.adminService.viewConsumerType().subscribe(ct =>  {
      this.consumerType = ct;
    });

    this.adminService.viewCity().subscribe(city => {
      this.cities = city;
    })

    this.adminService.viewConsumers().subscribe(consumer => {
      this.consumers = consumer;
    })
  }

  /*------------------------------------Consumer Registration--------------------------------------------*/

  closeRegistrationForm() {
    document.getElementById("register-consumer-form")!.style.display = "none";
  }

  showRegisterConsumerForm() {
    document.getElementById("register-consumer-form")!.style.display = "block";
  }

  /*------------------------------------Add City--------------------------------------------*/

  showAddCityForm() {
    document.getElementById("add-city-form")!.style.display = "block";
  }

   closeAddCityForm() {
    document.getElementById("add-city-form")!.style.display = "none";
  }

  /*------------------------------------Add Area--------------------------------------------*/

  showAddAreaForm() {
    document.getElementById("add-area-form")!.style.display = "block";
  }

   closeAddAreaForm() {
    document.getElementById("add-area-form")!.style.display = "none";
  }

  /*------------------------------------View All Consumers--------------------------------------------*/

  showConsumerTable() {
    document.getElementById("all-consumers")!.style.display = "block";
  }

   closeConsumerTable() {
    document.getElementById("all-consumers")!.style.display = "none";
  }

  /*------------------------------------View All Consumer Types--------------------------------------------*/

  showConsumerTypeTable() {
    document.getElementById("all-consumer-types")!.style.display = "block";
  }

   closeConsumerTypeTable() {
    document.getElementById("all-consumer-types")!.style.display = "none";
  }

  /*------------------------------------View All Cities--------------------------------------------*/

  showCityTable() {
    document.getElementById("all-cities")!.style.display = "block";
  }

   closeCityTable() {
    document.getElementById("all-cities")!.style.display = "none";
  }

  /*------------------------------------View All Areas--------------------------------------------*/

  showAreaTable() {
    document.getElementById("all-areas")!.style.display = "block";
  }

   closeAreaTable() {
    document.getElementById("all-areas")!.style.display = "none";
  }
}
