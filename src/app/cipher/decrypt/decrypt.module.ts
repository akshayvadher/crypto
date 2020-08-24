import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@crypto/shared/shared.module';
import { DecryptRoutingModule } from './decrypt-routing.module';
import { DecryptComponent } from './decrypt.component';

@NgModule({
  declarations: [DecryptComponent],
  imports: [
    CommonModule,
    DecryptRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class DecryptModule {}
