import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/presentation/home.component';
import { CardComponent } from './pages/home/presentation/components/card/card.component';
import { CardListService } from './pages/home/data/data';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CardListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
