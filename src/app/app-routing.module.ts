import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CalCalculatorComponent } from './cal-calculator/cal-calculator.component';
import { HitloopComponent } from './hitloop/hitloop.component';

const routes: Routes = [
  {path: 'landing-page', component: LandingPageComponent},
  {path: 'cal-calculator', component: CalCalculatorComponent},
  {path: 'hitloop', component: HitloopComponent},
  {path: '', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}