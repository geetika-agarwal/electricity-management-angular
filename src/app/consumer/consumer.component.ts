import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Bill } from '../bill';
import { ConsumerService } from '../consumer.service';

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.css']
})
export class ConsumerComponent {
  constructor(public consumerService: ConsumerService) {}

  bills: Bill[] = []
  email: any = "";

  viewBills() {
    this.email = window.sessionStorage.getItem('email');
    this.consumerService.viewBills(this.email).subscribe(bill => {
      this.bills = bill
    })
  }

  showBillTable() {
    this.viewBills();
    document.getElementById("bill-view")!.style.display = "block"
  }

  closeBillTable() {
    document.getElementById("bill-view")!.style.display = "none"
  }

  /*---------------------------Delete Consumer Account------------------------------------ */
  showDeleteForm() {
    document.getElementById("delete-form")!.style.display = "block"
  }

  closeDeleteForm() {
    document.getElementById("delete-form")!.style.display = "none"
  }

  deleteconsumer(data:any) {
    if(data.email !== window.sessionStorage.getItem("email")) {
      alert("Enter correct Email Address")
    }
    else {
      this.consumerService.deleteConsumer(data.email).subscribe(
      (data:any) => console.log(data),
      (error: HttpErrorResponse) => {
        if(error.status === 202) {
          alert("Deleted account!!!")
          window.sessionStorage.removeItem("email");
          window.location.pathname="/"
        } else {
          alert(error.error)
        }
      }
    )
    }
  }

/*---------------------------Update Name------------------------------------ */
  showUpdateNameForm() {
    document.getElementById("update-name-form")!.style.display = "block"
  }

  closeUpdateNameForm() {
    document.getElementById("update-name-form")!.style.display = "none"
  }

  updatename(data:any) {
    this.email = window.sessionStorage.getItem('email');
      this.consumerService.updateName(data.name, this.email).subscribe(
      (data:any) => console.log(data),
      (error: HttpErrorResponse) => {
        if(error.status === 202) {
          alert("Name Updated Successfully!!!")
          window.location.pathname="/consumer"
        } else {
          alert(error.error)
        }
      }
    )
  }

  /*---------------------------Update Password------------------------------------ */
  showUpdatePasswordForm() {
    document.getElementById("update-password-form")!.style.display = "block"
  }

  closeUpdatePasswordForm() {
    document.getElementById("update-Password-form")!.style.display = "none"
  }

  updatepassword(data:any) {
    this.email = window.sessionStorage.getItem('email');
      this.consumerService.updatePassword(data.password, this.email).subscribe(
      (data:any) => console.log(data),
      (error: HttpErrorResponse) => {
        if(error.status === 202) {
          alert("Password Updated Successfully!!!")
          window.location.pathname="/consumer"
        } else {
          alert(error.error)
        }
      }
    )
  }
}
