import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'medapp',
    loadChildren:  () => import('@med/med.module').then(mod => mod.MedModule)
  },
  {
    path: 'auth',
    loadChildren:  () => import('@auth/auth.module').then(mod => mod.AuthModule)
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
