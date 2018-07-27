import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Routes,
  RouterModule,
} from '@angular/router';
import { HomePageComponent } from './stats/home-page/home-page.component';
import { ListPageComponent } from './stats/list-page/list-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    /*
      You can use "redirectTo: '/home'"
      or "component: HomePageComponent"
     */
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'list',
    component: ListPageComponent,
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRouting { }
