const tipoSelect = document.getElementById('tipo');
const grupoAgente = document.getElementById('grupo-agente');
const grupoClasse = document.getElementById('grupo-classe');
const selectAgente = document.getElementById('select-agente');
const campoClasse = document.getElementById('classe-agente');

const classesAgentes = {
    'Jett': 'Duelista',
    'Reyna': 'Duelista',
    'Raze': 'Duelista',
    'Sova': 'Iniciador',
    'Fade': 'Iniciador',
    'Brimstone': 'Controlador',
    'Viper': 'Controlador',
    'Cypher': 'Centinela',
    'Killjoy': 'Centinela'
};

tipoSelect.addEventListener('change', () => {
    if (tipoSelect.value === 'novo_agente' || tipoSelect.value === 'balanceamento') {
        grupoAgente.style.display = 'block';
        grupoClasse.style.display = 'block';
    } else {
        grupoAgente.style.display = 'none';
        grupoClasse.style.display = 'none';
    }
});

selectAgente.addEventListener('change', () => {
    const agenteSelecionado = selectAgente.value;
    const classe = classesAgentes[agenteSelecionado] || '';
    campoClasse.value = classe;
});

const inputQtdPessoas = document.getElementById('qtd_pessoas');
const containerFuncoes = document.getElementById('container-funcoes-membros');

function atualizarFuncoesMembros() {
    const quantidade = parseInt(inputQtdPessoas.value) || 1;
    containerFuncoes.innerHTML = '';

    if (quantidade > 1) {
        for (let i = 1; i <= quantidade; i++) {
            const divGrupo = document.createElement('div');
            divGrupo.className = 'field-group';

            const label = document.createElement('label');
            label.innerText = `FUNÇÃO DO INTEGRANTE ${i}`;

            const select = document.createElement('select');
            select.name = `funcao_membro_${i}`;
            select.required = true;

            const opPadrao = document.createElement('option');
            opPadrao.value = '';
            opPadrao.disabled = true;
            opPadrao.selected = true;
            opPadrao.innerText = 'Selecione a função';

            select.appendChild(opPadrao);

            const funcoes = ['Líder do Projeto', 'Game Designer', 'Artista 3D / 2D', 'Programador', 'Sonoplasta / Composer', 'Tester / Balanceamento'];

            funcoes.forEach(funcao => {
                const op = document.createElement('option');
                op.value = funcao;
                op.innerText = funcao;
                if (i === 1 && funcao === 'Líder do Projeto') {
                    op.selected = true;
                }
                select.appendChild(op);
            });

            divGrupo.appendChild(label);
            divGrupo.appendChild(select);
            containerFuncoes.appendChild(divGrupo);
        }
    }
}

inputQtdPessoas.addEventListener('input', atualizarFuncoesMembros);
