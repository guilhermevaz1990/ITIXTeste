import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultaDetailsComponent } from './consulta-details/consulta-details.component';
import { ConsultaDetailComponent } from './consulta-details/consulta-detail/consulta-detail.component';
import { ConsultaDetailListComponent } from './consulta-details/consulta-detail-list/consulta-detail-list.component';
import { ConsultaDetailService } from './shared/consulta-detail.service';

@NgModule({
  declarations: [
    AppComponent,
    ConsultaDetailsComponent,
    ConsultaDetailComponent,
    ConsultaDetailListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [ConsultaDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
