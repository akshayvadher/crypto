import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { ThemeChangerComponent } from './theme-changer/theme-changer.component';

@NgModule({
  declarations: [HeaderComponent, ThemeChangerComponent],
  imports: [CommonModule, RouterModule, BsDropdownModule.forRoot()],
  exports: [HeaderComponent],
})
export class HeaderModule {}
