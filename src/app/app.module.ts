import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DiretivasComponent } from './components/diretivas/diretivas.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    DataBindingComponent,
    NavbarComponent,
    DiretivasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
