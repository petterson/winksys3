import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import { ServiceService } from '../../Service/service.service';
import { FuncionarioService } from '../../Service/funcionario.service';
import { Atividade } from 'src/app/Modelo/Atividade';
import { Funcionario } from 'src/app/Modelo/Funcionario'; 


@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {

  nomeDosFuncionarios:String[];
  funcio:Funcionario;
  atividade:Atividade;      

  constructor(private funcionarioService:FuncionarioService, private formBuilder:FormBuilder, private service:ServiceService, private router: Router) { 
    this.RetornaFuncionarios();
    this.funcio = new Funcionario;
    this.funcio.id=1
    this.funcio.cpf='';
    this.funcio.nome='';
    this.funcio.cargo='';
  }

   formulario: any = FormGroup;

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      descricao: [''],
      status: [''],
      prioridade: [''],
      funcionario: [''],
      dataPrevista: [new Date] 
        });
  }

  ///////RETORNA OS NOMES DOS FUNCIONARIOS PARA SELECTBOX

  RetornaFuncionarios() {
    this.funcionarioService.getNomeFuncionarios().subscribe(data => {
      console.log(data);
      this.nomeDosFuncionarios = data;
    });
  }

  ////METODO RESPONSAVEL POR USAR O atributo service PARA CADASTR NO BACK-END

  OnSubmit(){
    this.funcio.nome = this.formulario.get('funcionario').value
     this.atividade = this.formulario.value;
     this.atividade.funcionario = this.funcio;
     console.log(this.atividade);
     
    this.service.createAtividade(this.atividade)
    .subscribe(data=>{alert("Cadastrado Com Sucesso...!!!");
    this.router.navigate(["listar"]);
     this.formulario.reset(this.atividade);
    })
   }
}

