import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CommonFormComponent } from './common-form/common-form.component';

@NgModule({
  declarations: [CommonFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [CommonFormComponent],
})
export class SharedModule {}
