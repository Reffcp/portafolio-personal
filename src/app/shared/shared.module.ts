import { NgbootstrapModule } from './ngbootstrap/ngbootstrap.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NgbootstrapModule
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbootstrapModule
  ],
})
export class SharedModule { }
