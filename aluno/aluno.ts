import Endereco from "../endereco/endereco";
import { SituacaoAluno } from "../enums/enum";
import { Projeto } from "../interfaces/projeto.interface";
import Pessoa from "../pessoa/pessoa";

class Aluno extends Pessoa implements Projeto {
  private _curso: string = "";
  private _situacao: SituacaoAluno = SituacaoAluno.ATIVO;

  public get curso(): string {
    return this._curso;
  }

  public set curso(value: string) {
    this._curso = value;
  }

  public get situacao(): SituacaoAluno {
    return this._situacao;
  }

  public set situacao(value: SituacaoAluno) {
    this._situacao = value;
  }

  constructor(
    nome: string,
    sobrenome: string,
    cpf: string,
    idade: number,
    brasileiro: boolean,
    endereco: Endereco[],
    curso: string,
    situacao: SituacaoAluno
  ) {
    super(nome, sobrenome, cpf, idade, brasileiro, endereco);
    this.matricula = this.gerarMatricula();
    this.curso = curso;
    this.situacao = situacao;
  }

  protected gerarMatricula(): number {
    return parseInt((Math.random() * 1000000).toString());
  }

  public submeterProjetoExtensao(): void {
    console.log("Projeto de Extensao Submetida");
  }

  public submeterProjetoPesquisa(): void {
    console.log("Projeto de Pesquida Submetida");
  }
}

export default Aluno;
