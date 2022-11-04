import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularCardWrapperComponent } from './components/angular-card-wrapper/angular-card-wrapper.component';
import { ReactWidgetWrapperComponent } from './components/react-widget-wrapper/react-widget-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactWidgetWrapperComponent,
    AngularCardWrapperComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
