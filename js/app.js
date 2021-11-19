import { btn, btn_limpar} from "./dados.js";
import {calcula_retorno, adicionar_btn_limpar, limpar} from "./funcoes.js"


btn.addEventListener("click", calcula_retorno)
btn.addEventListener("click", adicionar_btn_limpar)
btn_limpar.addEventListener("click", limpar)
