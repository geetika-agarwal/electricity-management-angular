import { HttpErrorResponse, HttpEvent, HttpHeaderResponse, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { Area } from '../area';
import { Bill } from '../bill';
import { City } from '../city';
import { Consumer } from '../consumer';
import { ConsumerType } from '../consumer-type';
import { ConsumerService } from '../consumer.service';
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
  billsByCid: Bill[] = []
  billsByMnY: Bill[] = []
  billsByCity: Bill[] = []
  billsByArea: Bill[] = []
  areasByCity: Area[] = []
  months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  Area: string = ""
  Month: string = ""
  City: string = ""
  consumertype: string = ""
  cityName: string = ""
  areaName: string = ""
  newAreaName: string = ""
  registerAreaName: string =""
  registerConsumerType: string = ""

  constructor(public adminService: AdminService, public consumerService: ConsumerService) {
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
    document.querySelector("form")?.reset();
    document.getElementById("register-consumer-form")!.style.display = "block";
  }

  registerconsumer(data:any) {
    if(data.email === null || data.password === null || data.name === null || data.areaName===null|| data.consumerTypeName===null
      || data.email.trim() === "" || data.password.trim() === "" || data.name.trim() === "") {
      alert("Fill all the values!!!")
    } else {
    console.log(data)
    this.consumerService.registerConsumer(data).subscribe(
      (data:any) => console.log(data),
      (error: HttpErrorResponse) => {
        if(error.status === 202) {
          alert("Registered Successfully!!!")

          document.querySelector("form")?.reset();
        } else {
          alert(error.error)
        }
      }
    )
    }
  }

  /*------------------------------------Add City--------------------------------------------*/

  showAddCityForm() {
    document.getElementById("add-city-form")!.style.display = "block";
  }

   closeAddCityForm() {
    document.getElementById("add-city-form")!.style.display = "none";
  }

  addcity(data:any) {
    if(data.city === null || data.city.trim() === "") {
      alert("Fill the City Name")
    } else {
    console.log(data)
    this.adminService.addCity(data).subscribe(
      (data:any) => console.log(data),
      (error: HttpErrorResponse) => {
        if(error.status === 202) {
          alert("City Added successfully!!!")

          document.querySelector("form")?.reset();
        } else {
          alert(error.error)
        }
      }
    )
    }
  }

  /*------------------------------------Add Area--------------------------------------------*/

  showAddAreaForm() {
    document.getElementById("add-area-form")!.style.display = "block";
  }

   closeAddAreaForm() {
    document.getElementById("add-area-form")!.style.display = "none";
  }

  addarea(data:any) {
    if(data.city === null || data.area.trim() === "" || data.area === null) {
      alert("Fill the Area Details")
    } else {
    console.log(data)
    this.adminService.addArea(data).subscribe(
      (data:any) => console.log(data),
      (error: HttpErrorResponse) => {
        if(error.status === 202) {
          alert("City Added successfully!!!")

          document.querySelector("form")?.reset();
        } else {
          alert(error.error)
        }
      }
    )
    }
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

  /*------------------------------------View All Bills by Consumer Id--------------------------------------------*/

  showBillByCidForm() {
    document.getElementById("bill-by-cid-form")!.style.display = "block";
  }

  closeBillByCidForm() {
    document.getElementById("bill-by-cid-form")!.style.display = "none";
    this.closeBillByCidTable();
  }

  getBillByCid(data: any) {
    if(data.email.trim() === "") {
      alert("Select a Email")
    } else {
      this.adminService.viewBillByCid(data.email).subscribe(bill => {
      this.billsByCid = bill;
    })
    this.showBillByCidTable();
    }
  }

  showBillByCidTable() {
    document.getElementById("all-bills-by-cid")!.style.display = "block";
  }

   closeBillByCidTable() {
    document.getElementById("all-bills-by-cid")!.style.display = "none";
  }

  /*------------------------------------View Bill By Month and Year--------------------------------------------*/
  showBillByMnYForm() {
    document.getElementById("bill-by-mny-form")!.style.display = "block";
  }

  closeBillByMnYForm() {
    document.getElementById("bill-by-mny-form")!.style.display = "none";
    this.closeBillByMnYTable();
  }

  getBillByMnY(data: any) {
    if(data.month === "" || data.year == 0) {
      alert("Enter All Values")
    } else {
      this.adminService.viewBillByMnY(data.month, data.year).subscribe(bill => {
      this.billsByMnY = bill;
    })
    this.showBillByMnYTable();
    }
  }

  showBillByMnYTable() {
    document.getElementById("all-bills-by-mny")!.style.display = "block";
  }

  closeBillByMnYTable() {
    document.getElementById("all-bills-by-mny")!.style.display = "none";
  }

  /*------------------------------------View Bill By City--------------------------------------------*/
  showBillByCityForm() {
    document.getElementById("bill-by-city")!.style.display = "block";
  }

  closeBillByCityForm() {
    document.getElementById("bill-by-city")!.style.display = "none";
    this.closeBillByCityTable();
  }

  getBillByCity(data: any) {
    if(data.city === "") {
      alert("Select a city")
    } else {
      this.adminService.viewBillByCity(data.city).subscribe(bill => {
      this.billsByCity = bill;
    })
    this.showBillByCityTable();
    }
  }

  showBillByCityTable() {
    document.getElementById("all-bills-by-city")!.style.display = "block";
  }

  closeBillByCityTable() {
    document.getElementById("all-bills-by-city")!.style.display = "none";
  }

  /*------------------------------------View Bill By Area--------------------------------------------*/
  showBillByAreaForm() {
    document.getElementById("bill-by-area")!.style.display = "block";
  }

  closeBillByAreaForm() {
    document.getElementById("bill-by-area")!.style.display = "none";
    this.closeBillByAreaTable();
  }

  getBillByArea(data: any) {
    if(data.area === "") {
      alert("Select an area")
    } else {
      this.adminService.viewBillByArea(data.area).subscribe(bill => {
      this.billsByArea = bill;
    })
    this.showBillByAreaTable();
    }
  }

  showBillByAreaTable() {
    document.getElementById("all-bills-by-area")!.style.display = "block";
  }

  closeBillByAreaTable() {
    document.getElementById("all-bills-by-area")!.style.display = "none";
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
              alert("Modified Successfully!!!");
            else
              alert(error.statusText)
          }

        )
    }
  }

  /*------------------------------------Modify City Area Name--------------------------------------------*/

  showModifyCityAreaNameForm() {
    document.getElementById("modify-city-area-name")!.style.display = "block";
  }

  closeModifyCityAreaNameForm() {
    document.getElementById("modify-city-area-name")!.style.display = "none";
  }

  modifycityarea(data: {areaName: string, newCityName: string}) {
    if(data.areaName === "") {
      alert("Please select an Area");
    } else if (data.newCityName.trim() === "") {
      alert("Please Write the New City Name");
    } else if (data.newCityName.trim() === data.areaName.trim()) {
      alert("Old Name is same as the New Name")
    }

    else {
        this.adminService.modifyCityAreaName(data).subscribe(
          (          data: any) => console.log('success', data),
          (          error: HttpErrorResponse) => {
            if(error.status === 202)
              alert("Modified Successfully!!!");
            else
              alert(error.statusText)
          }

        )
    }
  }

  /*------------------------------------Modify City Name--------------------------------------------*/

  showModifyCityNameForm() {
    document.getElementById("modify-city-name")!.style.display = "block";
  }

  closeModifyCityNameForm() {
    document.getElementById("modify-city-name")!.style.display = "none";
  }

  modifyCity(data: {cityName: string, newCityName: string}) {
    if(data.cityName === "") {
      alert("Please select an City");
    } else if (data.newCityName.trim() === "") {
      alert("Please Write the New City Name");
    } else if (data.newCityName.trim() === data.cityName.trim()) {
      alert("Old Name is same as the New Name")
    }

    else {
        this.adminService.modifyCityName(data).subscribe(
          (          data: any) => console.log('success', data),
          (          error: HttpErrorResponse) => {
            if(error.status === 202)
              alert("Modified Successfully!!!");
            else
              alert(error.statusText)
          }

        )
    }
  }
/*------------------------------------Modify Rate--------------------------------------------*/

  showModifyRateForm() {
    document.getElementById("modify-rate")!.style.display = "block";
  }

  closeModifyRateForm() {
    document.getElementById("modify-rate")!.style.display = "none";
  }

  modifyrate(data: {consumerType: string, newRate: number}) {
    if(data.consumerType === null) {
      alert("Please select an Consumer Type");
    } else if (data.newRate === null) {
      alert("Please Write the New City Name");
    } else {
        this.adminService.modifyRate(data).subscribe(
          (          data: any) => console.log('success', data),
          (          error: HttpErrorResponse) => {
            if(error.status === 202)
              alert("Modified Successfully!!!");
            else
              alert(error.statusText)
          }

        )
    }
  }
}
