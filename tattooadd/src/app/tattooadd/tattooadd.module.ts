import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TattooaddComponent } from './tattooadd.component';
import { TattooaddRoutingModule } from './tattooadd-routing/tattooadd-routing.module';
import { HomePageComponent, CalendarPageComponent, UsersPageComponent, UserInfoPageComponent } from './pages/dash';
import { LoginPageComponent, RegisterPageComponent } from './pages/init';

@NgModule({
  declarations: [
    TattooaddComponent,

    HomePageComponent,
    CalendarPageComponent,
    UsersPageComponent,
    UserInfoPageComponent,

    LoginPageComponent,
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    TattooaddRoutingModule
  ],
  exports: [
    TattooaddComponent
  ]
})
export class TattooaddModule { }
