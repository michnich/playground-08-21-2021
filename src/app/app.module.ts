import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';

//KENDO
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { GridModule } from '@progress/kendo-angular-grid';
import { NotificationModule } from '@progress/kendo-angular-notification';


@NgModule({
  declarations: [AppComponent, LoginComponent, ListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InputsModule,
    BrowserAnimationsModule,
    LabelModule,
    GridModule,
    NotificationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
