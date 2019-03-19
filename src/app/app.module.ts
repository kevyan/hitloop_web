import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule,
        MatInputModule, MatDividerModule, MatDatepickerModule,
        MatSidenavModule,
        MatIconModule, MatToolbarModule, MatGridListModule} from '@angular/material';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { Route } from '@angular/compiler/src/core';
import { CalCalculatorComponent } from './cal-calculator/cal-calculator.component';
import { HitloopComponent } from './hitloop/hitloop.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    CalCalculatorComponent,
    HitloopComponent
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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
