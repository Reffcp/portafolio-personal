import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialStickComponent } from './components/social-stick/social-stick.component';

@NgModule({
  declarations: [SocialStickComponent],
  imports: [CommonModule],
  exports: [SocialStickComponent],
})
export class SharedModule {}
