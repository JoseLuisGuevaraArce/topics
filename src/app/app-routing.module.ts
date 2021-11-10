import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JasmineJavascriptComponent } from './pages/jasmine-javascript/jasmine-javascript.component';
import { LandingComponent } from './landing/landing.component';
import { NotFoundComponent } from './notFound/not-found.component';

const routes: Routes = [
  {path: 'landing', component: LandingComponent},
  {path: 'jasmine-javascript', component: JasmineJavascriptComponent},
  {path: '', redirectTo: '/landing', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
