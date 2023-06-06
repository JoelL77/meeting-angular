import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PrimengModule } from './shared/primeng/primeng.module';
import { ProjectModule } from './modules/project/project.module';
import { UserModule } from './modules/user/user.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './modules/auth/auth.module';
import { MessageService } from 'primeng/api';
import { StartModule } from './public/start.module';
import { PostModule } from './modules/post/post.module';
import localeEs from "@angular/common/locales/es";
import { registerLocaleData } from "@angular/common";
import { SharedModule } from './shared/shared.module';
import { ModalInvitationComponent } from './module/project/shared/modal-invitation/modal-invitation.component';
registerLocaleData(localeEs, "es");

@NgModule({
  declarations: [AppComponent, ModalInvitationComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PrimengModule,
    SharedModule,
    UserModule,
    StartModule,
    AuthModule,
    ReactiveFormsModule,
    ProjectModule,
    PostModule,
  ],
  providers: [MessageService,{provide:LOCALE_ID,useValue:'es'}],
  bootstrap: [AppComponent],
})
export class AppModule {}
