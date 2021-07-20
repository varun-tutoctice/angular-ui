import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutomationTestsComponent } from './automation-tests/automation-tests.component';
import { UnitTestsComponent } from './unit-tests/unit-tests.component';
import { AppUpdatesComponent } from './app-updates/app-updates.component';

var routes: Routes = [
  { path: 'automation', component: AutomationTestsComponent },
  { path: 'unit-test', component: UnitTestsComponent },
  { path: 'application', component: AppUpdatesComponent },
  { path: '**', redirectTo: 'automation', pathMatch: 'full' },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  AutomationTestsComponent,
  UnitTestsComponent,
  AppUpdatesComponent
]
