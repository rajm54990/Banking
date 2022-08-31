import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'; 
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { LoginComponent } from './login/login.component';
import { CreateSavingsAccountComponent } from './create-savings-account/create-savings-account.component';
import { AboutbankComponent } from './aboutbank/aboutbank.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccountStatementComponent } from './account-statement/account-statement.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import { AccountSummaryComponent } from './account-summary/account-summary.component';
import { AccountStatement2Component } from './account-statement2/account-statement2.component';
import { NeftComponent } from './neft/neft.component';
import { RtgsComponent } from './rtgs/rtgs.component';
import { ImpsComponent } from './imps/imps.component';
import { PayeeComponent } from './payee/payee.component';
import { InternetBankingComponent } from './internet-banking/internet-banking.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import {ServiceModuleService} from '../../src/app/service-module.service'
import { DatePipe } from '@angular/common';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { CustomersViewComponent } from './customers-view/customers-view.component'
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    ForgotPasswordComponent,
    NewPasswordComponent,
    LoginComponent,
    CreateSavingsAccountComponent,
    AboutbankComponent,
    AccountStatementComponent,
    AccountSummaryComponent,
    AccountStatement2Component,
    NeftComponent,
    RtgsComponent,
    ImpsComponent,
    PayeeComponent,
    InternetBankingComponent,
    MainDashboardComponent,
    ProfileComponent,
    AdminPanelComponent,
    CustomersViewComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatRadioModule
  ],
  providers: [ServiceModuleService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
