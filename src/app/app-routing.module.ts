import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';
import { ConsumerLoginComponent } from './consumer-login/consumer-login.component';
import { ConsumerComponent } from './consumer/consumer.component';
import { HelperLoginComponent } from './helper-login/helper-login.component';
import { HelperComponent } from './helper/helper.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterConsumerComponent } from './register-consumer/register-consumer.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: 'adminLogin', component: AdminLoginComponent},
  {path: 'helperLogin', component: HelperLoginComponent},
  {path: 'consumerLogin', component: ConsumerLoginComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'helper', component: HelperComponent},
  {path: 'consumer', component: ConsumerComponent},
  {path: 'consumerRegister', component: RegisterConsumerComponent},
  {path: '', component: WelcomeComponent},
  {path: "**", pathMatch: 'full', component: PageNotFoundComponent}
];  // sets up routes constant where you define your routes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
