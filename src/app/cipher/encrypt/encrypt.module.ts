import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EncryptRoutingModule } from './encrypt-routing.module';
import { EncryptComponent } from './encrypt.component';
import { SharedModule } from '@crypto/shared/shared.module';

@NgModule({
  declarations: [EncryptComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EncryptRoutingModule,
    SharedModule,
  ],
  exports: [],
})
export class EncryptModule {}
