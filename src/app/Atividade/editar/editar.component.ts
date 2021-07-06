import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Atividade } from 'src/app/Modelo/Atividade';
import { Funcionario } from 'src/app/Modelo/Funcionario';
import { FuncionarioService } from 'src/app/Service/funcionario.service';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})

////CLASSE EDITAR COMPONENTE ESTE FOI U ÚLTIMO METODO EM QUE ESTAVA TRABALHANDO ANTES DO BUG

export class EditarComponent implements OnInit {

  nomeDosFuncionarios:String[];
  funcio:Funcionario;
  atividade: Atividade = new Atividade();  
  atividades:Atividade[];

  constructor(private funcionarioService: FuncionarioService, private formBuilder:FormBuilder, private service:ServiceService, private router: Router) { 
    this.RetornaFuncionarios();
    this.funcio = new Funcionario;
    this.funcio.id=1
    this.funcio.cpf='';
    this.funcio.nome='';
    this.funcio.cargo='';
  }


  ////ESSE ATRIBUTO JUNTO COM O CONTEÚDO ngOnInit(): void { abaixo fazem parte 
  /////da biblioteca que deu erro

  formulario: any = FormGroup;

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      descricao: [''],
      status: [''],
      prioridade: [''],
      funcionario: [''],
      dataPrevista: [new Date]
        });
        this.Atualizar();
  }

  ////////////////METODO RETORNA NOME DOS FUNCIONARIOS, CASO SEJA NECESSÁRIO ATUALIZAR 
  /////O FUNCIONARIO NO SELECTBOX

  RetornaFuncionarios() {
    this.funcionarioService.getNomeFuncionarios().subscribe(data => {
      console.log(data);
      this.nomeDosFuncionarios = data;
    });
  }

  /*OnSubmit(){
    this.funcio.nome = this.formulario.get('funcionario').value
     this.atividade = this.formulario.value;
     this.atividade.funcionario = this.funcio;
     console.log(this.atividade);

    this.service.createAtividade(this.atividade)
    .subscribe(data=>{alert("Cadastrado Com Sucesso...!!!");
    this.router.navigate(["listar"]);
     this.formulario.reset(this.atividade);
    })
   }*/

   Listar(){
    this.service.getAtividades().subscribe(data=>{this.atividades=data;})
    this.router.navigate(["listar"]);
  }

///////METODO RESPONSÁVEL POR RECUPERAR A ATIVIDADE E SETAR NO FORMULARIO PARA EDITAR

  Atualizar(){
    let id=localStorage.getItem("id");
    var nid = Number(id);
    this.service.getAtividadeId(+nid).subscribe(data=>{
    this.atividade=data;
    })
  }

}
