import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [{
    provide: APP_BASE_HREF, useValue: '/crypto/'
  }]
  exports: [RouterModule],
})
export class AppRoutingModule { }
