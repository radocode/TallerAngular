import { DataService } from './core/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { PageTwoComponent } from './features/page-two/page-two.component';
import { TestServiceService } from './core/test-service.service';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NoticiaComponent } from './features/home/noticia/noticia.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageTwoComponent,
    NoticiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(DataService),
    HttpClientModule
  ],
  providers: [TestServiceService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
