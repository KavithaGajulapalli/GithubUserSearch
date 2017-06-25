import { NgModule } from '@angular/core';
import { BrowserModule as browser } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductComponent } from './products/product.component';
import { ContactComponent } from './contact/contact.component';
import { StarComponent } from './shared/star.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user/user-detail.component';
import { UserRepoComponent } from './user/user-repos.component';
import {routingX } from './app.routings';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [ browser, routingX, HttpModule, FormsModule ],
  declarations: [ AppComponent, WelcomeComponent, ProductComponent, ContactComponent, StarComponent, UserComponent, UserDetailComponent, UserRepoComponent ],
  bootstrap: [ AppComponent ]
   
})

export class AppModule { }
