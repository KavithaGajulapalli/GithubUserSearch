import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent }  from './app.component';
import { UserComponent } from './user/user.component';
const appRoutes: Routes = [
     
       { path: 'user', component: UserComponent },
      { path: '', component: UserComponent}  
      

];

export const routingX: ModuleWithProviders = RouterModule.forRoot(appRoutes);