import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from './components/modulos/material.module';
import { WorkflowComponent } from './components/workflow/workflow.component';
import { NavbarComponent } from './components/compartidos/navbar/navbar.component';
import { MaterialNavbarModule } from './components/compartidos/navbar/material-navbar.module';
import { TabComponent } from './components/compartidos/tab/tab.component';
import { CatsComponent } from './components/cats/cats.component';
import { ModulosComponent } from './components/modulos/modulos.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkflowComponent,
    NavbarComponent,
    TabComponent,
    CatsComponent,
    ModulosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MaterialNavbarModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
