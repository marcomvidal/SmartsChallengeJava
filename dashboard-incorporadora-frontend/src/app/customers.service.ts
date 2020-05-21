import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Page } from './model/Page';
import { ServiceRequest } from './ServiceRequest';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.url}/customers`;
  }

  getAll(request: ServiceRequest): Observable<Page>{
    return this.http.get<Page>(this.formatUrl(request));
  }

  private formatUrl(request: ServiceRequest) {
    let url: string = `${this.url}?page=${request.page}&orderBy=${request.order}`;
    url = request.startDate != undefined ? `${url}&startDate=${request.startDate}` : url;
    url = request.endDate != undefined ? `${url}&endDate=${request.endDate}` : url;

    console.log(url);
    return url;
  }
}
