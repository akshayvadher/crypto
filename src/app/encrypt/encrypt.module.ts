import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EncryptRoutingModule } from './encrypt-routing.module';
import { EncryptComponent } from './encrypt.component';

@NgModule({
  declarations: [EncryptComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EncryptRoutingModule,
  ],
  exports: [],
})
export class EncryptModule {}
