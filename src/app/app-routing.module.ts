import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MarketplaceComponent} from './pages/marketplace/marketplace.component';


const routes: Routes = [
  {
    path: '',
    component: MarketplaceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
