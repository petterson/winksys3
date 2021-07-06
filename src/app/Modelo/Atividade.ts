import { Funcionario } from "./Funcionario";

//////////CLASSE MODELO ATIVIDADE

export class Atividade{
    id:Number;
    descricao:String;
    status:String
    prioridade:String;
    funcionario:Funcionario;
    dataCadastro:Date;
    dataPrevista:Date;
    dataConclusao:Date;
}