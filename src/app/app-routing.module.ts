import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
import { ProfileComponent } from './component/profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: "home", component: HomeComponent},
  {path: "profile", component: ProfileComponent},
  {path: "contact", component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
