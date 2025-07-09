import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Users {

  httpClient = inject(HttpClient)

  getAll(){
    return this.httpClient.get<string[]>('http://localhost:3000/users')
  }

  constructor() { }
}
