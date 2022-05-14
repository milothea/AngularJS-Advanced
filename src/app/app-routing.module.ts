import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [AuthRoutingModule, RouterModule.forRoot(routes)],
  exports: [AuthRoutingModule, RouterModule]
})
export class AppRoutingModule { }
