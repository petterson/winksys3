import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Funcionario } from '../Modelo/Funcionario';

@Injectable({
  providedIn: 'root'
})

////////////////////CLASSE CRIA SERVIÇO DE CONEXÃO PARA FUNCIONARIO/////////////////

export class FuncionarioService {

  constructor(private http:HttpClient) { }

   url='http://localhost:8080/funcionarios'; 

////////////////////RETORNA LISTA DE FUNCIONARIOS/////////////////

   getFunconarios(){
    return this.http.get<Funcionario[]>(this.url);
  }

////////////////////CRIA UM NOVO FUNCIONARIO/////////////////

   createFuncionario(funcionario:Funcionario){
     return this.http.post<Funcionario>(this.url,funcionario);
   }
   
   getNomeFuncionarios(){
    return this.http.get<String[]>(this.url+"/nomes");
   }

////////////////////REMOVE FUNCIONARIO/////////////////

   deleteFuncionario(funcionario:Funcionario){
    console.log(funcionario.id); 
    return this.http.delete<Funcionario>(this.url+"/"+funcionario.id);
   }

   /////////////BUSCA ATIVIDADE SELECIONADA/////////////////////////////

   getAtividadeId(id:Number){
    return this.http.get<Funcionario>(this.url+"/"+id);
   }

  ////////////////////ATUALIZA FUNCIONARIO/////////////////

  updateFuncionario(funcionario:Funcionario){
     return this.http.put<Funcionario>(this.url+"/"+funcionario.id, funcionario);
  }

}
