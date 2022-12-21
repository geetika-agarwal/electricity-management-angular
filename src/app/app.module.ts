import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-component/app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HelperLoginComponent } from './helper-login/helper-login.component';
import { ConsumerLoginComponent } from './consumer-login/consumer-login.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { AmountDisplayPipe } from './amount-display.pipe';
import { DateDisplayPipe } from './date-display.pipe';
import { FormsModule } from '@angular/forms';
import { HelperComponent } from './helper/helper.component';
import { ConsumerComponent } from './consumer/consumer.component';
import { RegisterConsumerComponent } from './register-consumer/register-consumer.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    HelperLoginComponent,
    ConsumerLoginComponent,
    AdminComponent,
    AmountDisplayPipe,
    DateDisplayPipe,
    HelperComponent,
    ConsumerComponent,
    RegisterConsumerComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
