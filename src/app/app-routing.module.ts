import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { config } from '@config/config';
import { LoginGuardService as GuardLogin } from './middleware/login.middleware';

const routes: Routes = [
  {
    path: config.router.login,
    loadChildren: () => import('./views/login/login.modules').then(m => m.LoginModule),
  },
  {
    path: config.router.home,
    loadChildren: () => import('./views/home/home.modules').then(m => m.HomeModule),
    canActivate: [GuardLogin]
  },
  { path: '', redirectTo: config.router.login, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
