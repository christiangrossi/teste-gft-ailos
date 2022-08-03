import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConsultaCpfComponent } from './components/consulta-cpf/consulta-cpf.component';
import { InfoCooperadoComponent } from './components/info-cooperado/info-cooperado.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatBadgeModule} from '@angular/material/badge';


@NgModule({
  declarations: [
    AppComponent,
    ConsultaCpfComponent,
    InfoCooperadoComponent
  ],
  imports: [
    MatSidenavModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    MatSnackBarModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
