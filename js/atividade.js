function getAreaTotal() {
    return Number(localStorage.getItem('agromap_area')) || 0;
}

function getAtividades() {
    return JSON.parse(localStorage.getItem('agromap_atividades') || '[]');
}

function salvarAtividades(atividades) {
    localStorage.setItem('agromap_atividades', JSON.stringify(atividades));
}

function getPorcentagemUsada(atividades) {
    return atividades.reduce((soma, a) => soma + a.porcentagem, 0);
}

function criarCard(atividade, areaTotal, index) {
    const areaOcupada = Math.round((atividade.porcentagem / 100) * areaTotal);

    const li = document.createElement('li');
    li.className = 'card atividade-card';

    const left = document.createElement('div');
    left.className = 'atividade-card__left';

    const nome = document.createElement('h3');
    nome.className = 'atividade-card__name';
    nome.textContent = atividade.nome;

    const statLabel = document.createElement('p');
    statLabel.className = 'atividade-stat__label';
    statLabel.textContent = 'Área ocupada (m²):';

    const statValue = document.createElement('p');
    statValue.className = 'atividade-stat__value';
    const spanArea = document.createElement('span');
    spanArea.textContent = areaOcupada;
    const spanUnit = document.createElement('span');
    spanUnit.textContent = 'm²';
    statValue.append(spanArea, spanUnit);

    left.append(nome, statLabel, statValue);

    const right = document.createElement('div');
    right.className = 'atividade-card__right';

    const descLabel = document.createElement('p');
    descLabel.className = 'form-label';
    descLabel.textContent = 'Descrição da atividade:';

    const descText = document.createElement('p');
    descText.className = 'atividade-card__desc';
    descText.textContent = atividade.descricao || '—';

    const btnDeletar = document.createElement('button');
    btnDeletar.type = 'button';
    btnDeletar.className = 'btn-deletar';
    btnDeletar.textContent = 'Excluir';
    btnDeletar.addEventListener('click', () => {
        const atividades = getAtividades();
        atividades.splice(index, 1);
        salvarAtividades(atividades);
        renderizarAtividades();
    });

    right.append(descLabel, descText, btnDeletar);
    li.append(left, right);

    return li;
}

function renderizarAtividades() {
    const lista = document.getElementById('lista-atividades');
    const atividades = getAtividades();
    const areaTotal = getAreaTotal();

    lista.innerHTML = '';
    atividades.forEach((a, index) => lista.appendChild(criarCard(a, areaTotal, index)));
}

document.getElementById('form-atividade').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome-atividade').value.trim();
    const descricao = document.getElementById('descricao-atividade').value.trim();
    const porcentagem = Number(document.getElementById('area-atividade').value);

    if (!nome) {
        alert('Informe o nome da atividade.');
        return;
    }

    if (!porcentagem || porcentagem <= 0 || porcentagem > 100) {
        alert('Informe uma porcentagem entre 1 e 100.');
        return;
    }

    const atividades = getAtividades();
    const usada = getPorcentagemUsada(atividades);

    if (usada + porcentagem > 100) {
        alert(`Área insuficiente. Já foram usados ${usada}% do terreno. Disponível: ${100 - usada}%.`);
        return;
    }

    if (getAreaTotal() === 0) {
        alert('Nenhum terreno cadastrado. Vá até "Meu terreno" e salve as dimensões primeiro.');
        return;
    }

    atividades.push({ nome, descricao, porcentagem });
    salvarAtividades(atividades);
    renderizarAtividades();
    this.reset();
});

renderizarAtividades();