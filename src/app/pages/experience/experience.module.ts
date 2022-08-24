import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience.component';
import { ExperienceRoutingModule } from './experience-routing.module';
import { ExperienceFilterComponent } from './components/experience-filter/experience-filter.component';


@NgModule({
  declarations: [
    ExperienceComponent,
    ExperienceFilterComponent
  ],
  imports: [
    CommonModule,
    ExperienceRoutingModule,
  ]
})
export class ExperienceModule { }
