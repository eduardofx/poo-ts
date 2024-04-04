"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    get matricula() {
        return this._matricula;
    }
    set matricula(value) {
        this._matricula = value;
    }
    get nome() {
        return this._nome;
    }
    set nome(value) {
        this._nome = value;
    }
    get sobrenome() {
        return this._sobrenome;
    }
    set sobrenome(value) {
        this._sobrenome = value;
    }
    get cpf() {
        return this._cpf;
    }
    set cpf(value) {
        this._cpf = value;
    }
    get idade() {
        return this._idade;
    }
    set idade(value) {
        this._idade = value;
    }
    get brasileiro() {
        return this._brasileiro;
    }
    set brasileiro(value) {
        this._brasileiro = value;
    }
    get endereco() {
        return this._endereco;
    }
    set endereco(value) {
        this._endereco = value;
    }
    constructor(nome, sobrenome, cpf, idade, brasileiro, endereco) {
        this._matricula = 0;
        this._nome = "";
        this._sobrenome = "";
        this._cpf = "";
        this._idade = 0;
        this._brasileiro = true;
        this._endereco = [];
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.brasileiro = brasileiro;
        this.endereco = endereco;
        this.cpf = cpf;
        Pessoa.quantidadePessoas++;
    }
    exibirNomeCompleto() {
        return `O nome completo é: ${this.nome} ${this.sobrenome}`;
    }
    recuperaEndereco(posicao) {
        return this.endereco[posicao];
    }
    static getQuantidadePessoa() {
        return Pessoa.quantidadePessoas;
    }
}
Pessoa.quantidadePessoas = 0;
exports.default = Pessoa;
