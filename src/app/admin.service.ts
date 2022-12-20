import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http'
import { Consumer } from './consumer';
import { Area } from './area';
import { ConsumerType } from './consumer-type';
import { City } from './city';
import { Helper } from './helper';
import { Bill } from './bill';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient) { }

  loginAdmin(data: any): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/admin/login/?email=${data.email}&password=${data.password}`)
  }

  viewAreas():Observable<Area[]>{
    return this.http.get<Area[]>("http://localhost:8080/admin/area");
  }

  viewConsumerType():Observable<ConsumerType[]>{
    return this.http.get<ConsumerType[]>("http://localhost:8080/admin/view-consumer-type");
  }

  viewCity():Observable<City[]> {
    return this.http.get<City[]>("http://localhost:8080/admin/city");
  }

  viewConsumers():Observable<Consumer[]> {
    return this.http.get<Consumer[]>("http://localhost:8080/admin/consumers")
  }

  viewHelpers():Observable<Helper[]> {
    return this.http.get<Helper[]>("http://localhost:8080/admin/view-helpers")
  }

  viewBills():Observable<Bill[]> {
    return this.http.get<Bill[]>("http://localhost:8080/admin/view-all-bills")
  }

  viewBillByCid(email: string):Observable<Bill[]> {
    return this.http.get<Bill[]>(`http://localhost:8080/admin/view-bill-by-cid/?email=${email}`)
  }

  viewBillByMnY(month: string, year: number):Observable<Bill[]> {
    return this.http.get<Bill[]>(`http://localhost:8080/admin/view-bill-by-mny/?month=${month}&year=${year}`)
  }

  viewBillByCity(city: string):Observable<Bill[]> {
    return this.http.get<Bill[]>(`http://localhost:8080/admin/view-bill-by-city/?city=${city}`)
  }

  viewBillByArea(area: string):Observable<Bill[]> {
    return this.http.get<Bill[]>(`http://localhost:8080/admin/view-bill-by-area/?area=${area}`)
  }

  viewAreaByCity(city: string):Observable<Area[]> {
    return this.http.get<Area[]>(`http://localhost:8080/admin/area-by-city?city=${city}`)
  }

  modifyAreaName(data: any): any {
    return this.http.put<any>(`http://localhost:8080/admin/modify-area?areaName=${data.areaName}&newAreaName=${data.newAreaName}`, data);
  }

  addCity(data: any): any {
    return this.http.get<any>(`http://localhost:8080/admin/add-city/?name=${data.city}`)
  }

  addArea(data: any): any {
    return this.http.get<any>(`http://localhost:8080/admin/add-area/?areaname=${data.area}&cityname=${data.city}`)
  }

  modifyCityAreaName(data: any): any {
    return this.http.get<any>(`http://localhost:8080/admin/modify-area-city?areaName=${data.areaName}&newCityName=${data.newCityName}`);
  }

  modifyCityName(data: any): any {
    return this.http.get<any>(`http://localhost:8080/admin/modify-city?cityName=${data.cityName}&newCityName=${data.newCityName}`);
  }

  modifyRate(data: any): any {
    return this.http.get<any>(`http://localhost:8080/admin/modify-consumer-type-rate?typeName=${data.consumerType}&rate=${data.newRate}`);
  }
}
