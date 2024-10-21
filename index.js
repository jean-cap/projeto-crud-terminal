import {salvar, deletar, pegaDados, persistirValores} from "./banco.js";
import {finaliza, menu, menuSelecaoUsuario, le, textoVerde, textoAzul} from "./interface.js";

const itensMenu = [
    ' Adicionar ',
    ' Editar ',
    ' Deletar ',
    ' Ver todos ',
    ' Persistir ',
    ' Sair '
];

let id;
let nome;

while (1) {
    const selecionado = await menu(itensMenu);
    const item = selecionado.selectedText.trim().toLowerCase();

    switch (item) {
        case 'adicionar':
            nome = await le('Digite o nome do usuário: ');
            salvar(nome);
            textoVerde('Feito!');
            break;
        case 'editar':
            id = await menuSelecaoUsuario(pegaDados());
            nome = await le('Digite o nome atualizado: ');
            salvar(nome, id);
            textoVerde('Feito!');
            break;
        case 'deletar':
            id = await menuSelecaoUsuario(pegaDados());
            deletar(id);
            textoVerde('Feito!');
            break;
        case 'ver todos':
            const dados = pegaDados();
            textoAzul(dados);
            break;
        case 'persistir':
            persistirValores();
            textoVerde('Feito!');
            break;
        case 'sair':
            textoVerde('Até mais!');
            finaliza();
            break;
        default:
            console.log(`${item} não é válido.`);
    }
}

finaliza();