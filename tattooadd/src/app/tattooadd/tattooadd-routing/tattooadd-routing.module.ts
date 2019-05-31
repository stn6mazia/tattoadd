import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { TattooaddComponent } from '../tattooadd.component';
import { RegisterPageComponent, LoginPageComponent } from '../pages/init';
import { UserInfoPageComponent, CalendarPageComponent, HomePageComponent, UsersPageComponent } from '../pages/dash';

const routes: Routes = [
  {
    path: 'tattooadd',
    component: TattooaddComponent,
    children: [
      {
        path: 'dash/:id',
        children: [
          {
            path: 'home',
            component: HomePageComponent
          },
          {
            path: 'calendar',
            component: CalendarPageComponent
          },
          {
            path: 'users',
            component: UsersPageComponent,
            children: [
              {
                path: 'user/:id',
                component: UserInfoPageComponent
              }
            ]
          },
          {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full'
          },
          {
            path: '**',
            redirectTo: '',
            pathMatch: 'full'
          }
        ]
      },
      {
        path: 'login',
        component: LoginPageComponent
      },
      {
        path: 'register',
        component: RegisterPageComponent
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tattooadd',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TattooaddRoutingModule { }
