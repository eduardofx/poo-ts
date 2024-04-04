import Endereco from "../endereco/endereco";

abstract class Pessoa {
  protected _matricula: number = 0;
  private _nome: string = "";
  private _sobrenome: string = "";
  private _cpf: string = "";
  private _idade: number = 0;
  private _brasileiro: boolean = true;
  private _endereco: Endereco[] = [];

  private static quantidadePessoas: number = 0;

  public get matricula(): number {
    return this._matricula;
  }

  protected set matricula(value: number) {
    this._matricula = value;
  }

  public get nome(): string {
    return this._nome;
  }

  public set nome(value: string) {
    this._nome = value;
  }

  public get sobrenome(): string {
    return this._sobrenome;
  }

  public set sobrenome(value: string) {
    this._sobrenome = value;
  }

  public get cpf(): string {
    return this._cpf;
  }

  public set cpf(value: string) {
    this._cpf = value;
  }

  public get idade(): number {
    return this._idade;
  }

  public set idade(value: number) {
    this._idade = value;
  }

  public get brasileiro(): boolean {
    return this._brasileiro;
  }

  public set brasileiro(value: boolean) {
    this._brasileiro = value;
  }

  public get endereco(): Endereco[] {
    return this._endereco;
  }

  public set endereco(value: Endereco[]) {
    this._endereco = value;
  }

  constructor(
    nome: string,
    sobrenome: string,
    cpf: string,
    idade: number,
    brasileiro: boolean,
    endereco: Endereco[]
  ) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.brasileiro = brasileiro;
    this.endereco = endereco;
    this.cpf = cpf;
    Pessoa.quantidadePessoas++;
  }

  public exibirNomeCompleto(): string {
    return `O nome completo é: ${this.nome} ${this.sobrenome}`;
  }

  public recuperaEndereco(posicao: number): Endereco {
    return this.endereco[posicao];
  }

  public static getQuantidadePessoa(): number {
    return Pessoa.quantidadePessoas;
  }

  protected abstract gerarMatricula(): number;
}

export default Pessoa;
