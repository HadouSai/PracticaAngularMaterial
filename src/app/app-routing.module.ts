import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WorkflowComponent } from './components/workflow/workflow.component';
import { CatsComponent } from './components/cats/cats.component';
import { ModulosComponent } from './components/modulos/modulos.component';
import { AutoservicioComponent } from './components/modulos/autoservicio/autoservicio.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'workflow', component: WorkflowComponent },
  { path: 'cats', component: CatsComponent },
  { path: 'modules', component: ModulosComponent },
  { path: 'autoservicios', component: AutoservicioComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
