"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const enum_1 = require("../enums/enum");
const pessoa_1 = __importDefault(require("../pessoa/pessoa"));
class Aluno extends pessoa_1.default {
    get curso() {
        return this._curso;
    }
    set curso(value) {
        this._curso = value;
    }
    get situacao() {
        return this._situacao;
    }
    set situacao(value) {
        this._situacao = value;
    }
    constructor(nome, sobrenome, cpf, idade, brasileiro, endereco, curso, situacao) {
        super(nome, sobrenome, cpf, idade, brasileiro, endereco);
        this._curso = "";
        this._situacao = enum_1.SituacaoAluno.ATIVO;
        this.matricula = this.gerarMatricula();
        this.curso = curso;
        this.situacao = situacao;
    }
    gerarMatricula() {
        return parseInt((Math.random() * 1000000).toString());
    }
    submeterProjetoExtensao() {
        console.log("Projeto de Extensao Submetida");
    }
    submeterProjetoPesquisa() {
        console.log("Projeto de Pesquida Submetida");
    }
}
exports.default = Aluno;
