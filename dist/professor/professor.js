"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa_1 = __importDefault(require("../pessoa/pessoa"));
class Professor extends pessoa_1.default {
    get salario() {
        return this._salario;
    }
    set salario(value) {
        this._salario = value;
    }
    constructor(nome, sobrenome, cpf, idade, brasileiro, endereco, salario) {
        super(nome, sobrenome, cpf, idade, brasileiro, endereco);
        this._salario = 0;
        this.salario = salario;
        this.matricula = this.gerarMatricula();
    }
    gerarMatricula() {
        return parseInt((Math.random() * 100000).toString());
    }
    submeterProjetoPesquisa() {
        console.log("Projeto de pesquisa submetida");
    }
    submeterProjetoExtensao() {
        console.log("Submeter projeto de extensão");
    }
}
exports.default = Professor;
