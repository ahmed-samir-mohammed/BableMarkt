import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgetPasswordComponent } from './login/forget-password/forget-password.component';
import { ForgetPasswordConfirmComponent } from './login/forget-password-confirm/forget-password-confirm.component';
import { NewPasswordComponent } from './login/new-password/new-password.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forget-password', component: ForgetPasswordComponent},
  { path: 'confirm', component: ForgetPasswordConfirmComponent},
  { path: 'new-password', component: NewPasswordComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ForgetPasswordComponent,
    ForgetPasswordConfirmComponent,
    NewPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],

  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
