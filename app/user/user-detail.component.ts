import { Component, Input } from '@angular/core';
import {  IUser } from './Users'

@Component({
    selector: 'user-detail',
    templateUrl: 'app/user/user-detail.component.html'
})

export class UserDetailComponent {

 @Input() user: IUser;
}