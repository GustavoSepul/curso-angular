import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { HeroreComponent } from './heroes/heore/heroe.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    HeroreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
