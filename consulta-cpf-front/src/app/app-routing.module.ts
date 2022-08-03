import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaCpfComponent } from './components/consulta-cpf/consulta-cpf.component';
import { InfoCooperadoComponent } from './components/info-cooperado/info-cooperado.component';

const routes: Routes = [
  { path: 'consulta-cpf', component: ConsultaCpfComponent },
  { path: '**', redirectTo: 'consulta-cpf' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
