import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Required components for which route services to be activated
import { SignInComponent } from '../../components/auth/sign-in/sign-in.component';
import { SignUpComponent } from '../../components/auth/sign-up/sign-up.component';
import { DashboardComponent } from '../../components/admin/dashboard/dashboard.component';
import { ForgotPasswordComponent } from '../../components/auth/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from '../../components/auth/verify-email/verify-email.component';

// Import canActivate guard services
import { AdminGuard } from "../../shared/guard/admin.guard";
import { KeeperGuard } from "../../shared/guard/keeper.guard";
import { TouristGuard } from "../../shared/guard/tourist.guard";
import { SecureInnerPagesGuard } from "../../shared/guard/secure-inner-pages.guard";
import { KeeperDashboardComponent } from 'src/app/components/keeper/keeper-dashboard/keeper-dashboard.component';
import { WrongRouteComponent } from 'src/app/components/common/wrong-route/wrong-route.component';
import { LandingComponent } from 'src/app/components/common/landing/landing.component';
import { TouristDashboardComponent } from 'src/app/components/tourist/tourist-dashboard/tourist-dashboard.component';


// Include route guard in routes array
const routes: Routes = [
  { path: '', component: LandingComponent},
  { path: '', redirectTo: 'sign-in', pathMatch: 'full'},
  { path: 'sign-in', component: SignInComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'register-user', component: SignUpComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AdminGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'wrong-route', component: WrongRouteComponent},

  { path: 'keeper-dashboard', component: KeeperDashboardComponent,canActivate:[KeeperGuard]},

  { path: 'tourist-dashboard', component: TouristDashboardComponent,canActivate:[TouristGuard]}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }