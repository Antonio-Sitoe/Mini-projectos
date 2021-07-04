import ValidaForm from "./modules/valida.js";
import Conversao from "./modules/conversao.js";

const validacao = new ValidaForm("#formulario input");
validacao.getValid();

const conversao = new Conversao();
conversao.convert();
