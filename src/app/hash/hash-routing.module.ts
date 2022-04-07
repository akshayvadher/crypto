import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashComponent } from './hash/hash.component';

const routes: Routes = [
  {
    path: '',
    component: HashComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HashRoutingModule {}
