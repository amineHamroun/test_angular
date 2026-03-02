import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home-med-amine-hamrouni/home.component';
import { ListResComponent } from './list-res-med-amine-hamrouni/list-res.component';
import { UpdateResComponent } from './update-res-med-amine-hamrouni/update-res.component';
import { AddResComponent } from './add-res-Med-amine-hamrouni/add-res.component';
import { DetailesResComponent } from './detailes-res-Med-amine-hamrouni/detailes-res.component';
import { HeaderComponent } from './header-med-amine-hamrouni/header.component';
import { FooterComponent } from './footer-med-amine-hamrouni/footer.component';
import { DeleteComponent } from './delete-Med-Amine-Hamrouni/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListResComponent,
    UpdateResComponent,
    AddResComponent,
    DetailesResComponent,
    HeaderComponent,
    FooterComponent,
    DeleteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
