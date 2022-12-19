import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';
import { ConsumerLoginComponent } from './consumer-login/consumer-login.component';
import { HelperLoginComponent } from './helper-login/helper-login.component';

const routes: Routes = [
  {path: 'adminLogin', component: AdminLoginComponent},
  {path: 'helperLogin', component: HelperLoginComponent},
  {path: 'consumerLogin', component: ConsumerLoginComponent},
  {path: 'admin', component: AdminComponent}
];  // sets up routes constant where you define your routes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
