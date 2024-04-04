"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Endereco {
    get cep() {
        return this._cep;
    }
    set cep(value) {
        this._cep = value;
    }
    get rua() {
        return this._rua;
    }
    set rua(value) {
        this._rua = value;
    }
    get numero() {
        return this._numero;
    }
    set numero(value) {
        this._numero = value;
    }
    get estado() {
        return this._estado;
    }
    set estado(value) {
        this._estado = value;
    }
    get cidade() {
        return this._cidade;
    }
    set cidade(value) {
        this._cidade = value;
    }
    get bairro() {
        return this._bairro;
    }
    set bairro(value) {
        this._bairro = value;
    }
    constructor(cep, numero, rua, estado, cidade, bairro) {
        this._cep = "";
        this._rua = "";
        this._numero = 0;
        this._estado = "";
        this._cidade = "";
        this._bairro = "";
        this.cep = cep;
        this.numero = numero;
        this.rua = rua;
        this.estado = estado;
        this.cidade = cidade;
        this.bairro = bairro;
    }
}
exports.default = Endereco;
