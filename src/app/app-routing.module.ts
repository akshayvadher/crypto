import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  APP_BASE_HREF,
  LocationStrategy,
  HashLocationStrategy,
} from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: '/encrypt', pathMatch: 'full' },
  {
    path: 'encrypt',
    loadChildren: () =>
      import('./encrypt/encrypt.module').then((m) => m.EncryptModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    // {
    //   provide: APP_BASE_HREF,
    //   useValue: '/crypto/',
    // },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
