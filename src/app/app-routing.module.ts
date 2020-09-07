import { MattestComponent } from './mattest/mattest.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';

const routes: Routes = [
  { path:"",component:MattestComponent}      ,
  {path:"about",component:AboutComponent} ,
  {path:"users",component:UsersComponent},
  {path:"countries",component:CountriesComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
