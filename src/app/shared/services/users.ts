import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User, UserPayload } from '../interfaces/user';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Users {

  httpClient = inject(HttpClient);

  getById(id: number | string){
    return this.httpClient.get<User>(`${environment.apiUrl}/users/${id}`)
  }

  getAll(search?: string){
    let httpParams = new HttpParams();
    
    if(search){
      httpParams = httpParams.append('q', search)
    }

    return this.httpClient.get<User[]>(`${environment.apiUrl}/users`, {
      params: httpParams
    })
  }

  post(payload: UserPayload ){
    return this.httpClient.post<User[]>(`${environment.apiUrl}/users`, payload)
  }

  put(id: number, payload: UserPayload){
    return this.httpClient.put<User>(`${environment.apiUrl}/users/${id}`, payload)
  }

  delete(id: number ){
    return this.httpClient.delete<{}>(`${environment.apiUrl}/users/${id}`)
  }


  constructor() { }
}
