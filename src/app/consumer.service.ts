import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from './bill';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  constructor(private http: HttpClient) { }

  loginConsumer(data:any):Observable<any> {
    return this.http.get<any>(`http://localhost:8080/login/?email=${data.email}&password=${data.password}`)
  }

  registerConsumer(data:any):Observable<any> {
    return this.http.get<any>(`http://localhost:8080/register/?email=${data.email}&name=${data.name}&area_name=${data.areaName}&consumer_type_name=${data.consumerTypeName}&password=${data.password}`)
  }

  viewBills(data:any):Observable<Bill[]> {
    return this.http.get<Bill[]>(`http://localhost:8080/view-bills/?email=${data}`);
  }

  deleteConsumer(email:any):Observable<any> {
    return this.http.get<any>(`http://localhost:8080/remove-account/?email=${email}`);
  }

  updateName(name:any, email:any):Observable<any> {
    return this.http.get<any>(`http://localhost:8080/update-name/?email=${email}&name=${name}`);
  }

  updatePassword(password:any, email:any):Observable<any> {
    return this.http.get<any>(`http://localhost:8080/update-password/?email=${email}&password=${password}`);
  }
}
