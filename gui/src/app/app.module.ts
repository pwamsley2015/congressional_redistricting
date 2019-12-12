import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { HomeMapComponent } from './home-map/home-map.component';
import { MaterialModule } from './material.module';
import { SliderDataComponent } from './slider-data/slider-data.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { MiddlePanelComponent } from './middle-panel/middle-panel.component';
import { RightPanelComponent } from './right-panel/right-panel.component';
import { HeaderComponent } from './header/header.component';
import { Phase0Component } from './phase0/phase0.component';
import { Phase1Component } from './phase1/phase1.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeMapComponent,
    SliderDataComponent,
    LeftPanelComponent,
    MiddlePanelComponent,
    RightPanelComponent,
    HeaderComponent,
    Phase0Component,
    Phase1Component
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    LeafletModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
