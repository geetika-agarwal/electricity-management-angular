import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { Consumer } from './consumer';
import { Area } from './area';
import { ConsumerType } from './consumer-type';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient) { }

  // getCity():Observable<CityResponse[]> {
  //   return this.http.get<CityResponse[]>("http://localhost:8080/admin/city")
  // }

  registerConsumer(consumer: Consumer):Observable<String> {
    return this.http.post<String>("http://localhost:8080/admin/register-consumer", consumer);
  }

  viewAreas():Observable<Area[]>{
    return this.http.get<Area[]>("http://localhost:8080/admin/area");
  }

  viewConsumerType():Observable<ConsumerType[]>{
    return this.http.get<ConsumerType[]>("http://localhost:8080/admin/view-consumer-type");
  }
}
