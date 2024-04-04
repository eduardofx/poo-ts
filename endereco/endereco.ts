class Endereco {
  private _cep: string = "";
  private _rua: string = "";
  private _numero: number = 0;
  private _estado: string = "";
  private _cidade: string = "";
  private _bairro: string = "";

  public get cep(): string {
    return this._cep;
  }

  public set cep(value: string) {
    this._cep = value;
  }

  public get rua(): string {
    return this._rua;
  }

  public set rua(value: string) {
    this._rua = value;
  }

  public get numero(): number {
    return this._numero;
  }

  public set numero(value: number) {
    this._numero = value;
  }

  public get estado(): string {
    return this._estado;
  }

  public set estado(value: string) {
    this._estado = value;
  }

  public get cidade(): string {
    return this._cidade;
  }

  public set cidade(value: string) {
    this._cidade = value;
  }
  public get bairro(): string {
    return this._bairro;
  }

  public set bairro(value: string) {
    this._bairro = value;
  }

  constructor(
    cep: string,
    numero: number,
    rua: string,
    estado: string,
    cidade: string,
    bairro: string
  ) {
    this.cep = cep;
    this.numero = numero;
    this.rua = rua;
    this.estado = estado;
    this.cidade = cidade;
    this.bairro = bairro;
  }
}

export default Endereco;
