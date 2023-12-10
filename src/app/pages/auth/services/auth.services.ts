import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';
import { IUser } from '../types/user.interface';

@Injectable()
export class AuthServices {
  constructor(private http: HttpClient) {}

  registerUser(userDetails: IUser) {
    return this.http.post(`${environment.apiUrl}/users`, userDetails);
  }

  getUserByEmail(email: string): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${environment.apiUrl}/users?email=${email}`);
  }
}
