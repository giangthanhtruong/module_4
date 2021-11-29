import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { HeadderComponent } from './components/headder/headder.component';
import { FooterComponent } from './components/footer/footer.component';
import { SitebarComponent } from './components/sitebar/sitebar.component';
import { ContenComponent } from './components/conten/conten.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    HeadderComponent,
    FooterComponent,
    SitebarComponent,
    ContenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
