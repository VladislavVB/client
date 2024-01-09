import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPhoto } from '../types/photo';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class ShowroomServices {

  constructor(private http: HttpClient) {}

  getPhotos(): Observable<IPhoto[]> {
    console.log(12122);
    
    const url = `${environment.apiUrl}/photos`;
    return this.http.get(url).pipe(map((response: IPhoto[]) => response));
  }
}