import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeroComponent } from './home/hero/hero.component';
import { ContentsComponent } from './home/contents/contents.component';
import { FooterComponent } from './home/footer/footer.component';
import { CopyrightComponent } from './home/copyright/copyright.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-route.routing';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ContentsComponent,
    FooterComponent,
    CopyrightComponent,
    AboutMeComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
