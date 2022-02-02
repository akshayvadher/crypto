import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  APP_BASE_HREF,
  LocationStrategy,
  HashLocationStrategy,
} from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: '/cipher/decrypt', pathMatch: 'full' },
  {
    path: 'cipher',
    loadChildren: () =>
      import('./cipher/cipher.module').then((m) => m.CipherModule),
  },
  { path: 'encode', loadChildren: () => import('./encode/encode.module').then(m => m.EncodeModule) },
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
