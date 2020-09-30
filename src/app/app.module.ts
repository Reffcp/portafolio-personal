import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { FooterComponent } from './pages/footer/footer.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { MainContentComponent } from './pages/main/main-content/main-content.component';
import { ProjectsContentComponent } from './pages/main/projects-content/projects-content.component';
import { ContactContentComponent } from './pages/main/contact-content/contact-content.component';
=======
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
>>>>>>> 32caa8ed5f9c4704b95ea9c87df60f6aef20ca29

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    FooterComponent,
    NavBarComponent,
    MainContentComponent,
    ProjectsContentComponent,
    ContactContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
=======
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule
>>>>>>> 32caa8ed5f9c4704b95ea9c87df60f6aef20ca29
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
