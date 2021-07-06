import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdicionarComponent } from './Atividade/adicionar/adicionar.component';
import { EditarComponent } from './Atividade/editar/editar.component';
import { ListarComponent } from './Atividade/listar/listar.component';
import { MenuComponent } from './menu/menu.component';
import { AddfuncionarioComponent } from './Funcionario/addfuncionario/addfuncionario.component';
import { ListafuncionarioComponent } from './Funcionario/listafuncionario/listafuncionario.component';

const routes: Routes = [
  {path:'menu', component:MenuComponent},
  {path:'listar', component:ListarComponent},
  {path:'adicionar', component:AdicionarComponent},
  {path:'editar', component:EditarComponent},
  {path:'listafuncionario', component:ListafuncionarioComponent},
  {path:'addfuncionario', component:AddfuncionarioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
