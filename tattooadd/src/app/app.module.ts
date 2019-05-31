import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TattooaddModule } from './tattooadd/tattooadd.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TattooaddModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
