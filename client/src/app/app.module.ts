import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TestsComponent } from './components/tests/tests.component';
import { FormComponent } from './components/form/form.component';
import { GraficoBarrasComponent } from './components/grafico-barras/grafico-barras.component';

@NgModule({
  declarations: [
    AppComponent,
    TestsComponent,
    FormComponent,
    GraficoBarrasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
