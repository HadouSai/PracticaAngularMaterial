import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from './components/home/material.module';
import { WorkflowComponent } from './components/workflow/workflow.component';
import { NavbarComponent } from './components/compartidos/navbar/navbar.component';
import { MaterialNavbarModule } from './components/compartidos/navbar/material-navbar.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkflowComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MaterialNavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
