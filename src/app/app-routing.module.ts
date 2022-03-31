import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthGuard } from './auth.guards';
import { CardsListComponent } from './cards-list/cards-list.component';
import { SportCardComponent } from './sport-card/sport-card.component';

const routes: Routes = [
  { path: '', component: SportCardComponent },
  { path: 'card-list', component: CardsListComponent },
{ path: 'about-us', component: AboutUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
