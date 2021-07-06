import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Atividade } from '../Modelo/Atividade';

@Injectable({
  providedIn: 'root'
})

/////////////////CLASSE SERVIÇO CONEXÃO BACK-END ATIVIDADE/////////////////////

export class ServiceService {

  constructor(private http:HttpClient) { }

   url='http://localhost:8080/atividades'; 

   getAtividades(){
     return this.http.get<Atividade[]>(this.url);
   }

   ///////////////////CREATE ATIVIDADE/////////////////

   createAtividade(atividade:Atividade){
     return this.http.post<Atividade>(this.url,atividade);
   }

///////////////////DELETE ATIVIDADE////////////////////

   deleteAtividade(atividade:Atividade){
    //console.log(atividadeId); 
    return this.http.delete<Atividade>(this.url+"/"+atividade.id);
   }

 //////////////BUSCA ATIVIDADE SELECIONADA/////////////////////////////

   getAtividadeId(id:Number){
    return this.http.get<Atividade>(this.url+"/"+id);
   }

   ////////////////ATUALIZA ATIVIDADE///////////////////////

   updateAtividade(atividade:Atividade){
    return this.http.put<Atividade>(this.url+"/"+atividade.id, atividade);
   }
}
