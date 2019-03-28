import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  _url='https://fir-demo-6294a.firebaseio.com/.json'

  constructor(private _http: HttpClient) { }

  register(userData)
  {
    return this._http.post<any>(this._url,userData);
  }

  getUsers()
  {
    return this._http.get<Users[]>(this._url);
  }

}
