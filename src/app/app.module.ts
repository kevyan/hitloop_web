import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule,
        MatInputModule, MatDividerModule, MatDatepickerModule, MatCardModule,
        MatSidenavModule, MatExpansionModule, MatSelectModule, MatProgressSpinnerModule,
        MatIconModule, MatToolbarModule, MatGridListModule} from '@angular/material';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { Route } from '@angular/compiler/src/core';
import { CalCalculatorComponent } from './cal-calculator/cal-calculator.component';
import { HitloopComponent } from './hitloop/hitloop.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    CalCalculatorComponent,
    HitloopComponent,
    LoginComponent,
    LogoutComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDividerModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatGridListModule,
    MatFormFieldModule,
    FormsModule,
    MatExpansionModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
