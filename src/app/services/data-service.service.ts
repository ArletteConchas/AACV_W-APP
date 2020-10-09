import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get<any[]>('../../assets/js/bestSellingProducts.json', {
        observe: 'body',
        responseType: 'json'
    });
}
}
