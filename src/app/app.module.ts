import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CadONGComponent } from './components/cad-ong/cad-ong.component';
import { CadUserComponent } from './components/cad-user/cad-user.component';
import { ConfCcComponent } from './components/conf-cc/conf-cc.component';
import { RecupPasswordComponent } from './components/recup-password/recup-password.component';
import { ConfEeComponent } from './components/conf-ee/conf-ee.component';
import { DeletarcontaComponent } from './components/deletarconta/deletarconta.component';
import { ComprovanteComponent } from './components/comprovante/comprovante.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadONGComponent,
    CadUserComponent,
    ConfCcComponent,
    RecupPasswordComponent,
    ConfEeComponent,
    DeletarcontaComponent,
    ComprovanteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
