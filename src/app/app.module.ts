import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitlesComponent } from './components/titles/titles.component';
import { TextsComponent } from './pages/texts/texts.component';
import { HeaderandfooterComponent } from './components/headerandfooter/headerandfooter.component';
import { SecondaryHeaderComponent } from './components/secondary-header/secondary-header.component';

@NgModule({
  declarations: [
    AppComponent,
    TitlesComponent,
    TextsComponent,
    HeaderandfooterComponent,
    SecondaryHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
