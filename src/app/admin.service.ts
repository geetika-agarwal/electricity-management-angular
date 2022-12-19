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

  registerConsumer(consumer: Consumer):Observable<String> {
    return this.http.post<String>("http://localhost:8080/admin/register-consumer", consumer);
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

  viewAreaByCity(city: string):Observable<Area[]> {
    return this.http.get<Area[]>(`http://localhost:8080/admin/area-by-city?city=${city}`)
  }

  modifyAreaName(data: any): any {
    return this.http.put<any>(`http://localhost:8080/admin/modify-area?areaName=${data.areaName}&newAreaName=${data.newAreaName}`, data);
  }
}
