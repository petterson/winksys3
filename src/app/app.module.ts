import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule/*, FormBuilder, FormGroup, FormsModule*/ } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServiceService } from '../app/Service/service.service';
import { ListarComponent } from './Atividade/listar/listar.component';
import { AdicionarComponent } from './Atividade/adicionar/adicionar.component';
import { EditarComponent } from './Atividade/editar/editar.component';
import { MenuComponent } from './menu/menu.component';
import { AddfuncionarioComponent } from './Funcionario/addfuncionario/addfuncionario.component';
import { ListafuncionarioComponent } from './Funcionario/listafuncionario/listafuncionario.component';
import { FuncionarioService } from './Service/funcionario.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListarComponent,
    EditarComponent,
    AdicionarComponent,
    AddfuncionarioComponent,
    ListafuncionarioComponent
  ],
  imports: [  
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    //FormsModule,
    HttpClientModule,
    ReactiveFormsModule
   // FormBuilder,
    //FormGroup

  ],
  providers: [ServiceService, FuncionarioService],
  bootstrap: [AppComponent]
})
export class AppModule {}
