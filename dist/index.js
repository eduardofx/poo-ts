"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const aluno_1 = __importDefault(require("./aluno/aluno"));
const endereco_1 = __importDefault(require("./endereco/endereco"));
const enum_1 = require("./enums/enum");
const end = new endereco_1.default("87000", 22, "Rua x", "PR", "Maringa", "centro");
const aluno = new aluno_1.default("Eduardo", "Teste", "0000", 10, true, [end], "Sistemas", enum_1.SituacaoAluno.ATIVO);
console.log(end);
