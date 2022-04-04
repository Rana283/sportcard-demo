import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { SportCardComponent } from './sport-card/sport-card.component';
import { CardsListComponent } from './cards-list/cards-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TotalValueComponent } from './total-value/total-value.component';
import { cardsReducer } from './state/cards.reducer';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NumbersOnlyDirective } from './components/numbers-only.directive';
import { SportCardService } from './services/sport-card.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ cards: cardsReducer}),
    HttpClientModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers:[SportCardService],
  declarations: [AppComponent,SportCardComponent, CardsListComponent, TotalValueComponent, HeaderComponent, FooterComponent, AboutUsComponent, NumbersOnlyDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}