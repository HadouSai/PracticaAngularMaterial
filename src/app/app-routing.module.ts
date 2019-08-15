import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WorkflowComponent } from './components/workflow/workflow.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'workflow', component: WorkflowComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
