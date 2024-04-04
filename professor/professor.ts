import Endereco from "../endereco/endereco";
import { SituacaoAluno } from "../enums/enum";
import { Projeto } from "../interfaces/projeto.interface";
import Pessoa from "../pessoa/pessoa";

class Professor extends Pessoa implements Projeto {
  private _salario: number = 0;

  public get salario(): number {
    return this._salario;
  }

  public set salario(value: number) {
    this._salario = value;
  }

  constructor(
    nome: string,
    sobrenome: string,
    cpf: string,
    idade: number,
    brasileiro: boolean,
    endereco: Endereco[],
    salario: number
  ) {
    super(nome, sobrenome, cpf, idade, brasileiro, endereco);
    this.salario = salario;
    this.matricula = this.gerarMatricula();
  }

  protected gerarMatricula(): number {
    return parseInt((Math.random() * 100000).toString());
  }

  submeterProjetoPesquisa(): void {
    console.log("Projeto de pesquisa submetida");
  }

  submeterProjetoExtensao(): void {
    console.log("Submeter projeto de extensão");
  }
}

export default Professor;
