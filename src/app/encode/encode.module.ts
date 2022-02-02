import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EncodeRoutingModule } from './encode-routing.module';
import { EncodeComponent } from './encode.component';
import { EncodeWorkerComponent } from './encode-worker/encode-worker.component';
import { SharedModule } from '@crypto/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DecodeComponent } from './decode/decode.component';


@NgModule({
  declarations: [
    EncodeComponent,
    EncodeWorkerComponent,
    DecodeComponent
  ],
  imports: [
    CommonModule,
    EncodeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class EncodeModule { }
