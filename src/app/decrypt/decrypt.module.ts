import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DecryptRoutingModule } from './decrypt-routing.module';
import { DecryptComponent } from './decrypt.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DecryptComponent],
  imports: [CommonModule, DecryptRoutingModule, ReactiveFormsModule],
})
export class DecryptModule {}
