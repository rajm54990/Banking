import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AccountStatementComponent } from './account-statement/account-statement.component';
import { AccountSummaryComponent } from './account-summary/account-summary.component';
import { AccountStatement2Component } from './account-statement2/account-statement2.component';
import { NeftComponent } from './neft/neft.component';
import { RtgsComponent } from './rtgs/rtgs.component';
import { ImpsComponent } from './imps/imps.component';
import { PayeeComponent } from './payee/payee.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { RegisterComponent } from './register/register.component';
import { AboutbankComponent } from './aboutbank/aboutbank.component';
import { ProfileComponent } from './profile/profile.component';
import { InternetBankingComponent } from './internet-banking/internet-banking.component';
import { CreateSavingsAccountComponent } from './create-savings-account/create-savings-account.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component'
import { CustomersViewComponent } from './customers-view/customers-view.component'

const routes: Routes = [
  {path:'',component: AboutbankComponent},
  {path:'home',component: AboutbankComponent},
  {path:'aboutbank',component: AboutbankComponent},
  {path:'login',component: LoginComponent },
  {path:'register',component: RegisterComponent },
  {path:'create new account',component: CreateSavingsAccountComponent },
  {path:'accountsummary',component: AccountSummaryComponent},
  {path:'accountstatement',component: AccountStatementComponent},
  {path:'accountstaement2',component:  AccountStatement2Component},
  {path:'neft',component:  NeftComponent},
  {path:'rtgs',component:  RtgsComponent},
  {path:'payee',component:  PayeeComponent},
  {path:'imps',component:  ImpsComponent},
  {path:'forgot-passaword',component:ForgotPasswordComponent},
  {path:'forgot-transaction',component: NewPasswordComponent},
  {path:'profile',component:  ProfileComponent},
  {path:'main',component:  MainDashboardComponent},
  {path:'internet-banking',component:  InternetBankingComponent},
  {path:'admin-panel',component:  AdminPanelComponent},
  {path:'Customer-view',component:  CustomersViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
