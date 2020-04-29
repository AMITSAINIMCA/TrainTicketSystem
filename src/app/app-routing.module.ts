import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
/* Routing Here */
const routes: Routes = [
  { path: '',  redirectTo: '/index', pathMatch: 'full'},
  { path : 'index', loadChildren:'./ticket-counter/ticket.module#TicketModule'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes , { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
