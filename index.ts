import Aluno from "./aluno/aluno";
import Endereco from "./endereco/endereco";
import { SituacaoAluno } from "./enums/enum";
import Professor from "./professor/professor";

const end: Endereco = new Endereco(
  "87000",
  22,
  "Rua x",
  "PR",
  "Maringa",
  "centro"
);

const end2: Endereco = new Endereco(
  "870002",
  33,
  "Rua x",
  "PR",
  "Maringa",
  "centro"
);

const aluno: Aluno = new Aluno(
  "Eduardo",
  "Teste",
  "0000",
  10,
  true,
  [end, end2],
  "Sistemas",
  SituacaoAluno.ATIVO
);

const professor: Professor = new Professor(
  "Professor",
  "sobrenome",
  "111111",
  20,
  false,
  [end2, end],
  10
);

console.log(aluno);
console.log(`\n##################\n\n`);
console.log(professor);
