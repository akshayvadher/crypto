import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HashRoutingModule } from './hash-routing.module';
import { HashComponent } from './hash/hash.component';
import { SharedModule } from '@crypto/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HashComponent],
  imports: [
    CommonModule,
    HashRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class HashModule {}
