import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environment';
import { IProduct } from '../../products/types/product';
// import { IProduct } from '../types/product';

@Injectable()
export class AuthServices {
  constructor(private http: HttpClient) {}

  getUserByEmail(email: string): Observable<IProduct[]> {
    const url = `${environment.apiUrl}/products`;
    return this.http.get(url).pipe(map((response: IProduct[]) => response));
  }
}
