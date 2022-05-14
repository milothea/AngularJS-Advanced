import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth/auth-routing.module';

@NgModule({
  imports: [AuthRoutingModule],
  exports: [AuthRoutingModule]
})
export class AppRoutingModule { }
