import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private http: HttpClient) { }

  loginHelper(data: any): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/helper/login/?email=${data.email}&password=${data.password}`)
  }

  AddBill(data: any): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/helper/home/?email=${data.email}&units=${data.units}`)
  }
}
