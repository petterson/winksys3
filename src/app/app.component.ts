import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'winksys3';

  constructor(private router:Router, private formBuilder: FormBuilder){}
  formula: FormGroup;

  /*Listar(){
    this.router.navigate(["listar"]);
  }
  Adicionar(){
    this.router.navigate(["adicionar"]);
  }
  Editar(){
    this.router.navigate(["editar"]);
  }*/

}
