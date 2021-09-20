import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { ContentService } from './shared/services/content.service';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // MatButtonModule
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
