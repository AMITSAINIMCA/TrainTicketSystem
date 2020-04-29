import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Components Routing
import { subRoutes } from './ticket-routing.module';
/* List components*/
import { ReserveComponent } from './reserve/reserve.component'; 

@NgModule({
  declarations: [ReserveComponent],
  imports: [
		RouterModule.forChild(subRoutes), 
		CommonModule,
		FormsModule
  ]
})

export class TicketModule { }
