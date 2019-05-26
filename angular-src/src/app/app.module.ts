import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// Reactive Form
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

// App routing modules
import { AppRoutingModule } from './shared/routing/app-routing.module';

// App components
import { AppComponent } from './app.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/auth/verify-email/verify-email.component';

// Firebase services + enviorment module
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

// Auth service
import { AuthService } from "./shared/services/auth.service";
import { KeeperDashboardComponent } from './components/keeper/keeper-dashboard/keeper-dashboard.component';
import { TouristDashboardComponent } from './components/tourist/tourist-dashboard/tourist-dashboard.component';
import { LandingComponent } from './components/common/landing/landing.component';
import { WrongRouteComponent } from './components/common/wrong-route/wrong-route.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { NavbarOutComponent } from './components/common/navbar-out/navbar-out.component';
import { HotelService } from './shared/services/hotel.service';
import { RatingPipe } from './classes/ratingpipe';
import { PagerService } from './shared/services/pager.service';
import { MatDatepickerModule, MatNativeDateModule, MatInputModule, MatDialogModule } from '@angular/material';
import { ConfirmBookingDialogComponent } from './components/tourist/confirm-booking-dialog/confirm-booking-dialog.component';
import { HomeComponent } from './components/common/home/home.component';
import { SearchComponent } from './components/tourist/search/search.component';
import { HotelDetailComponent } from './components/tourist/hotel-detail/hotel-detail.component';
import { AboutComponent } from './components/common/about/about.component';
import { SearchfilterComponent } from './components/tourist/searchfilter/searchfilter.component';
import { BookingComponent } from './components/tourist/booking/booking.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    KeeperDashboardComponent,
    TouristDashboardComponent,
    WrongRouteComponent,
    LandingComponent,
    NavbarComponent,
    NavbarOutComponent,
    AppComponent,
    HomeComponent,
    SearchComponent,
    HotelDetailComponent,
    AboutComponent,
    RatingPipe,
    SearchfilterComponent,
    BookingComponent,
    ConfirmBookingDialogComponent
  ],
  entryComponents: [
    ConfirmBookingDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatInputModule, 
    BrowserAnimationsModule, 
    MatDialogModule
  
  ],
  providers: [
    AuthService,
    HotelService, 
    RatingPipe, 
    PagerService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }