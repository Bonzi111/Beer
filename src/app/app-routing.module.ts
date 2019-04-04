import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import {CardsComponent} from './cards/cards.component';
import {LastPageComponent} from './last-page/last-page.component';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {AddToCartComponent} from './add-to-cart/add-to-cart.component';
import {FormComponent} from './form/form.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'form_page', component:FormComponent,canActivate:[AuthGuard] },
  {path:'cart_page', component:AddToCartComponent,canActivate:[AuthGuard]},
  {path:'login_page', component:LoginComponent},
  {path:'signup_page', component:SignupComponent},
  {path:'beer-features/:id', component:LastPageComponent, canActivate:[AuthGuard]},
  {path:'beer-details/:id', component:BeerDetailsComponent, canActivate:[AuthGuard]},
  {path:'cards', component:CardsComponent,canActivate:[AuthGuard]},
  {path:'',redirectTo:'/login_page',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
