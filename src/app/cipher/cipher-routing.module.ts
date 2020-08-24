import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CipherComponent } from './cipher.component';

const routes: Routes = [
  {
    path: '',
    component: CipherComponent,
    children: [
      {
        path: 'encrypt',
        loadChildren: () =>
          import('./encrypt/encrypt.module').then((m) => m.EncryptModule),
      },
      {
        path: 'decrypt',
        loadChildren: () =>
          import('./decrypt/decrypt.module').then((m) => m.DecryptModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CipherRoutingModule {}
