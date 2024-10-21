import kit from 'terminal-kit';

const term = kit.terminal;

export async function menu(itens) {
    let options = {
        style: term.inverse,
        selectedStyle: term.white.bgCyan
    }

    return await term.singleLineMenu(itens, options).promise;
}

export async function menuSelecaoUsuario(itens) {
    let options = {
        style: term.inverse,
        selectedStyle: term.white.bgGray
    }

    const selecionada = await term.singleColumnMenu(itens, options).promise;
    return selecionada.selectedText.split('->')[1].trim();
}

export async function le(enunciado) {
    term(`${enunciado}\n\n`);
    return await term.inputField().promise;
}

export function textoVerde(texto) {
    term.green(`\n\n${texto}`);
}

export function textoAzul(texto) {
    term.blue(`\n\n${texto}`);
}

export function finaliza() {
    process.exit();
}