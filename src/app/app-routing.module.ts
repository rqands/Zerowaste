import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CadONGComponent } from './components/cad-ong/cad-ong.component';
import { CadUserComponent } from './components/cad-user/cad-user.component';
import { AppComponent } from './app.component';
import { ConfCcComponent } from './components/conf-cc/conf-cc.component';
import { RecupPasswordComponent } from './components/recup-password/recup-password.component';
import { ConfEeComponent } from './components/conf-ee/conf-ee.component';
import { DeletarcontaComponent } from './components/deletarconta/deletarconta.component';
import { ComprovanteComponent } from './components/comprovante/comprovante.component';

const routes: Routes = [
{path: '', component:AppComponent},
{path: 'login', component: LoginComponent},
{path: 'cadastroONG', component: CadONGComponent},
{path: 'cadastrousuario', component:CadUserComponent},
{path: 'confirmacaodecad', component:ConfCcComponent},
{path: 'recupsenha', component:RecupPasswordComponent},
{path: 'confemail', component:ConfEeComponent},
{path: 'deletarconta', component:DeletarcontaComponent},
{path: 'comprovante', component:ComprovanteComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
