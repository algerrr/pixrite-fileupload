import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxFileDropModule } from "ngx-file-drop";
import { MustMatchDirective } from './_helpers/must-match.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ViewUploadsComponent } from './view-uploads/view-uploads.component';
import { HeaderComponent } from './header/header.component';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';



@NgModule({
  declarations: [
    AppComponent,
    MustMatchDirective,
    HeaderComponent,
    FileUploadComponent,
    ViewUploadsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    NgxFileDropModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/secure-file-upload/' },
  ],
  bootstrap: [AppComponent],
  entryComponents: [],
  exports: []
})
export class AppModule { }
