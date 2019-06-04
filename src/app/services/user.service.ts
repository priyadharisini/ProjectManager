import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { User } from '../models/User';
import { AppSettings} from '../models/appsettings'
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private http: HttpClient) { }

  getUsers() {
    //debugger
    return this.http.get<User[]>(AppSettings.UsersBaseUrl);
  }

  getById(id: number) {
   // debugger
    return this.http.get<User>(AppSettings.UsersBaseUrl + '/' + id);
  }

  delete(id: number) {
    const deleteUrl = AppSettings.UsersBaseUrl + '/delete/' + id;
    return this.http.post<any>(deleteUrl, {});
  }

  createOrUpdateUser(parameter : User){
    //debugger
    return this.http.post(AppSettings.UsersBaseUrl + '/add/', parameter).pipe();
  }  
}
