import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPageComponent } from './components/detail-page/detail-page.component';
import { LoginComponent } from './components/login/login.component';
import { OverviewPageComponent } from './components/overview-page/overview-page.component';

const routes: Routes = [
  {path: '', component: OverviewPageComponent},
  {path: 'detail-page', component: DetailPageComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
