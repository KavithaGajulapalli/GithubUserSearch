import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service'
import {  IUser } from './Users';
import { IRepositories } from './repositories';
@Component({
    templateUrl: 'app/user/user.component.html', 
    styleUrls: ['app/user/user.style.css'],
    providers: [ UserService ]

})
export class UserComponent {
 constructor( private _userService: UserService){}
userName: string;
user : IUser;
repos: IRepositories[];
 errorMessage: string;
search ():void {
    console.log(this.userName);
  this._userService.getUserDetail(this.userName)
        .subscribe(user => this.user = user,
                           error => this.errorMessage = <any>error);
console.log(this.user);
      
}
showRepositories(loginId: string):void {
   this._userService.getUserRepos(loginId)
        .subscribe(repositories => this.repos = repositories, error =>this.errorMessage = <any>error);
        console.log( this.repos);
}
}