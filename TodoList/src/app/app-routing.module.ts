import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './service/home/home.component';
import { SignupComponent } from './signup/signup.component';
import { UsereventComponent } from './userevent/userevent.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
{path:'signup',component:SignupComponent},
{path:'home',component:HomeComponent},
{path:'userdash',component:UsereventComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
