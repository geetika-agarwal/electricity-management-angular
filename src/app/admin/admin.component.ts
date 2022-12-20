import { HttpErrorResponse, HttpEvent, HttpHeaderResponse, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { Area } from '../area';
import { Bill } from '../bill';
import { City } from '../city';
import { Consumer } from '../consumer';
import { ConsumerType } from '../consumer-type';
import { Helper } from '../helper';

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
  helpers: Helper[] = []
  bills: Bill[] = []
  areasByCity: Area[] = []

  cityName: string = ""
  areaName: string = ""
  newAreaName: string = ""

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

    this.adminService.viewHelpers().subscribe(helper => {
      this.helpers = helper;
    })

    this.adminService.viewBills().subscribe(bill => {
      this.bills = bill;
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

   /*------------------------------------View All Helpers--------------------------------------------*/

  showHelperTable() {
    document.getElementById("all-helpers")!.style.display = "block";
  }

   closeHelperTable() {
    document.getElementById("all-helpers")!.style.display = "none";
  }

  /*------------------------------------View All Bills--------------------------------------------*/

  showBillTable() {
    document.getElementById("all-bills")!.style.display = "block";
  }

   closeBillTable() {
    document.getElementById("all-bills")!.style.display = "none";
  }

  /*------------------------------------View Area By City--------------------------------------------*/
  showAreaCityForm() {
    document.getElementById("area-by-city")!.style.display = "block";
  }

  closeAreaCityForm() {
    document.getElementById("area-by-city")!.style.display = "none";
    this.closeAreaCityTable();
  }

  getAreaByCity(data: any) {
    if(data.cityName === "") {
      alert("Select a city")
    } else {
      this.adminService.viewAreaByCity(data.cityName).subscribe(area => {
      this.areasByCity = area;
    })
    this.showAreaCityTable();
    }
  }

  showAreaCityTable() {
    document.getElementById("all-area-city")!.style.display = "block";
  }

  closeAreaCityTable() {
    document.getElementById("all-area-city")!.style.display = "none";
  }

  /*------------------------------------Modify Area Name--------------------------------------------*/

  showModifyAreaNameForm() {
    document.getElementById("modify-area-name")!.style.display = "block";
  }

  closeModifyAreaNameForm() {
    document.getElementById("modify-area-name")!.style.display = "none";
  }

  modifyArea(data: {areaName: string, newAreaName: string}) {
    if(data.areaName === "") {
      alert("Please select an Area");
    } else if (data.newAreaName.trim() === "") {
      alert("Please Write the New Area Name");
    } else if (data.newAreaName.trim() === data.areaName.trim()) {
      alert("Old Name is same as the New Name")
    }

    else {
        this.adminService.modifyAreaName(data).subscribe(
          (          data: any) => console.log('success', data),
          (          error: HttpErrorResponse) => {
            if(error.status === 202)
              alert(error.statusText + " - Modified Successfully");
            else
              alert(error.statusText)
          }

        )
    }
  }
}
