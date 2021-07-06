import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Funcionario } from 'src/app/Modelo/Funcionario';
import { FuncionarioService } from 'src/app/Service/funcionario.service';

@Component({
  selector: 'app-listafuncionario',
  templateUrl: './listafuncionario.component.html',
  styleUrls: ['./listafuncionario.component.css']
})
export class ListafuncionarioComponent implements OnInit {

  funcionarios:Funcionario[];

  constructor(private service:FuncionarioService, private router: Router) { 
    this.service.getFunconarios().subscribe(data=>{this.funcionarios=data;})
  }

  ngOnInit(): void {
  }

  Listar(){
    this.service.getFunconarios().subscribe(data=>{this.funcionarios=data;})
    this.router.navigate(["listafuncionario"]);
  }

  Delete(funcionario:Funcionario){
    this.service.deleteFuncionario(funcionario).subscribe(data=>{
    this.funcionarios = this.funcionarios.filter(p=>p!==funcionario);})
    //console.log(atividade.id);   
    alert("Deletado Com Sucesso...!!!");
  }

  Atualizar(funcionario:Funcionario): void{
    //console.log(funcionario);
    localStorage.setItem("id", funcionario.id.toString());
    this.router.navigate(["editarfuncionario"]); 
  }

}
