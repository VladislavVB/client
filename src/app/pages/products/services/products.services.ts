import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environment';
import { IProduct } from '../types/product';

@Injectable()
export class ProductsServices {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    const url = `${environment.apiUrl}/products`;
    return this.http.get(url).pipe(map((response: IProduct[]) => response));
  }
}
