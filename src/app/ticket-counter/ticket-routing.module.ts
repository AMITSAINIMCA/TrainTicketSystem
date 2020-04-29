import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

/* Customer lists routing */
import { ReserveComponent } from './reserve/reserve.component';
export const subRoutes: Routes = [
  {
    path: '',
    component: ReserveComponent
  }
];