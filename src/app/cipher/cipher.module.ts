import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CipherRoutingModule } from './cipher-routing.module';
import { CipherComponent } from './cipher.component';


@NgModule({
  declarations: [CipherComponent],
  imports: [
    CommonModule,
    CipherRoutingModule
  ]
})
export class CipherModule { }
