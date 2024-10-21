import fs from 'fs';
import {v4 as uuidv4} from 'uuid';

// Formato: {nome, id}
let dadosManipulaveis = _carregarValores();

function _carregarValores() {
    const dadosJSON = fs.readFileSync('banco.json', 'utf8');
    return JSON.parse(dadosJSON);
}

export function salvar(nome, id) {
    let indice = dadosManipulaveis.findIndex((element) => element.id === id);
    if (indice >= 0) {
        dadosManipulaveis[indice].nome = nome;
    } else {
        const idUnico = uuidv4();
        dadosManipulaveis.push({nome, id: idUnico});
    }
}

export function deletar(id) {
    dadosManipulaveis = dadosManipulaveis.filter(dado => {
        return dado.id !== id;
    });
}

export function pegaDados() {
    return dadosManipulaveis.map(dado => {
        return `${dado.nome} -> ${dado.id}`;
    });
}

export function persistirValores() {
    const dadosJSON = JSON.stringify(dadosManipulaveis, null, 4);
    fs.writeFileSync('banco.json', dadosJSON, 'utf8');
}