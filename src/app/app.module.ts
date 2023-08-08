import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderToolbarComponent } from './components/header-toolbar/header-toolbar.component';
import { AboutComponent } from './components/about/about.component';
import { GroupProjectsComponent } from './components/group-projects/group-projects.component';
import { ProjectComponent } from './components/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderToolbarComponent,
    AboutComponent,
    GroupProjectsComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
