import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import {CardsComponent} from './cards/cards.component';
import {LastPageComponent} from './last-page/last-page.component';
const routes: Routes = [
  {path:'beer-features/:id', component:LastPageComponent},
  {path:'beer-details/:id', component:BeerDetailsComponent},
  {path:'cards', component:CardsComponent},
  {path:'',redirectTo:'/cards',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
