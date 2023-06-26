import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FlexMatIconModule, FlexMatIconService } from "flex-mat-icon";
import { AppMatIconService } from "./services/app-mat-icon.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FlexMatIconModule,
    NoopAnimationsModule
  ],
  providers: [
    {provide: FlexMatIconService, useClass: AppMatIconService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private iconService: AppMatIconService
  ) {
    this.iconService.registerIcons();
  }
}
