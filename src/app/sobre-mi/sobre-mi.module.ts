import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { SobreMiRoutingModule } from './sobre-mi-routing.module';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';

@NgModule({
  declarations: [
    SobreMiComponent,
  ],
  imports: [
    CommonModule,
    SobreMiRoutingModule,
    SharedModule,
  ],
})
export class SobreMiModule { }
