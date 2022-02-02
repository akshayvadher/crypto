import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecodeComponent } from './decode/decode.component';
import { EncodeWorkerComponent } from './encode-worker/encode-worker.component';
import { EncodeComponent } from './encode.component';

const routes: Routes = [
  {
    path: '',
    component: EncodeComponent,
    children: [
      { path: 'encode', component: EncodeWorkerComponent },
      { path: 'decode', component: DecodeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EncodeRoutingModule {}
