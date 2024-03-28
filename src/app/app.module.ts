import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SrhComponent } from './srh/srh.component';
import { CskComponent } from './csk/csk.component';
import { KkrComponent } from './kkr/kkr.component';
import { RcbComponent } from './rcb/rcb.component';
import { IplComponent } from './ipl/ipl.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    SrhComponent,
    CskComponent,
    KkrComponent,
    RcbComponent,
    IplComponent,
    HeaderComponent,
    ListComponent
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
