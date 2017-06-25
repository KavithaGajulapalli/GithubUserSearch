
import {  Injectable } from '@angular/core';
import {Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable} from  'rxjs/Observable';
import {  IUser } from './Users'
import { IRepositories } from './repositories';
@Injectable()
export class UserService {
private _userUrl = 'https://api.github.com/users/';
constructor(private _http: Http) {}
    getUserDetail(userName: string): Observable <IUser> {
        console.log(this._userUrl+ userName);
         return this._http.get(this._userUrl + userName)
            .map((response: Response) => <IUser> response.json())  
    }

   getUserRepos(userId:string): Observable <IRepositories[]>{
    return  this._http.get( this._userUrl+ userId +'/repos')
            .map((response:Response) => <IRepositories[]> response.json())
   }

    
  }