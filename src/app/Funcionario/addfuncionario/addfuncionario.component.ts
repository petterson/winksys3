import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/Modelo/Funcionario';
import { FuncionarioService } from 'src/app/Service/funcionario.service';

@Component({
  selector: 'app-addfuncionario',
  templateUrl: './addfuncionario.component.html',
  styleUrls: ['./addfuncionario.component.css']
})
export class AddfuncionarioComponent implements OnInit {

  funcionario:Funcionario;

  constructor(private formBuilder:FormBuilder, private router:Router, private funcionarioService:FuncionarioService) { }

  formulario: any = FormGroup;

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: [''],
      cpf: [''],
      cargo: ['']
      });
  }

  OnSubmit(){
     this.funcionario = this.formulario.value;
     console.log(this.funcionario);
    this.funcionarioService.createFuncionario(this.funcionario)
    .subscribe(data=>{alert("Cadastrado Com Sucesso...!!!");
    this.router.navigate(["listafuncionario"]);
     this.formulario.reset(this.funcionario);
    })
   }

}
