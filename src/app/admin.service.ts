import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { Consumer } from './consumer';
import { Area } from './area';
import { ConsumerType } from './consumer-type';
import { City } from './city';


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
}
