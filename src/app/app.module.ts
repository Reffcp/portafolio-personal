import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './pages/footer/footer.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { MainContentComponent } from './pages/main/main-content/main-content.component';
import { ProjectsContentComponent } from './pages/main/projects-content/projects-content.component';
import { ContactContentComponent } from './pages/main/contact-content/contact-content.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavBarComponent,
    MainContentComponent,
    ProjectsContentComponent,
    ContactContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
