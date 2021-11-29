import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { LikeComponent } from './like/like.component';
import {FormsModule} from "@angular/forms";
import { HeaderComponent } from './componemt/layouts/header/header.component';
import { FooterComponent } from './componemt/layouts/footer/footer.component';
import { SitebarComponent } from './componemt/layouts/sitebar/sitebar.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    LikeComponent,
    HeaderComponent,
    FooterComponent,
    SitebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
