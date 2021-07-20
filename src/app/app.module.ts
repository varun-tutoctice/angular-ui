import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { BuildInfoService } from './Services/build-info.service';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    BuildInfoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
