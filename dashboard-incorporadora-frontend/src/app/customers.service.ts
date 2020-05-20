import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Customer } from './model/Customer';
import { Page } from './model/Page';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.url}/customers`;
  }

  getAll(page: number): Observable<Customer[]> {
    return this.http
      .get<Page>(`${this.url}?page=${page}`)
      .pipe(map(page => page.content));
  }
}
