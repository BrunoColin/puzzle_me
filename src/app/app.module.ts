import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PieceComponent } from './piece/piece.component';
import { PieceOptionsComponent } from './piece-options/piece-options.component';
import { GameInfoComponent } from './game-info.component';

@NgModule({
  declarations: [
    AppComponent,
    PieceComponent,
    PieceOptionsComponent,
    GameInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
