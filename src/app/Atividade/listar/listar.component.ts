import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Atividade } from 'src/app/Modelo/Atividade';
import { ServiceService } from '../../Service/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
}) 
/////CLASSE LISTA COMPONENTE RESPONSÁVEL POR LISTAR AS ATIVIDADES E DELETAR AS ATIVIDADES
//////ALÉM DE ENVIAR A ATIVIDADE PARA SER ATUALIZADA

export class ListarComponent implements OnInit {

  atividades:Atividade[];

  constructor(private service:ServiceService, private router: Router) { 
    this.service.getAtividades().subscribe(data=>{this.atividades=data;})
  }
  
  ngOnInit(): void {
  }

  ////////////METODO  RECEBE AS ATIVIDADES DO BACK-END ATRAVES DA ATRIBUTO SERVICE DA CLASSE
  ///////ServiceService e com o ROUTER NAVEGA PARA A TABELA LISTAR ATIVIDADE///////
  Listar(){
    this.service.getAtividades().subscribe(data=>{this.atividades=data;})
    this.router.navigate(["listar"]);
  }

  ////USA O ATRIBUTO service da classe ServiceService para deletar a atividade no back-end

  Delete(atividade:Atividade){
    this.service.deleteAtividade(atividade).subscribe(data=>{
    this.atividades = this.atividades.filter(p=>p!==atividade);})
      //console.log(atividade.id);   
    alert("Deletado Com Sucesso...!!!");
  }

  /////////ENVIA A ATIVIDADE PARA ServiceService PARA SER ATUALIZADA/////

  Atualizar(atividade:Atividade): void{
    //console.log(funcionario);
    localStorage.setItem("id", atividade.id.toString());
    this.router.navigate(["editar"]); 
  }
}
