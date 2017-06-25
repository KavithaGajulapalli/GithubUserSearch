import { Component, Input } from '@angular/core';
import { IRepositories } from './repositories';

@Component({
    selector: 'user-repos',
    templateUrl: 'app/user/user-repos.component.html'
})
export class UserRepoComponent{
    @Input() userRepos: IRepositories[];
}