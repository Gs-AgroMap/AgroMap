document.getElementById('area').addEventListener('input', function() {
    document.getElementById('preview-area').textContent = this.value || '—';
});

document.getElementById('perimetro').addEventListener('input', function() {
    document.getElementById('preview-perimetro').textContent = this.value || '—';
});

function atualizarLocal() {
    const municipio = document.getElementById('municipio').value;
    const estado = document.getElementById('estado').value;
    const local = municipio && estado ? `${municipio}/${estado}` : municipio || estado || '—';
    document.getElementById('preview-local').textContent = local;
}

document.getElementById('municipio').addEventListener('input', atualizarLocal);
document.getElementById('estado').addEventListener('change', atualizarLocal);

function exportarRelatorio() {
    const nome = document.getElementById('nome-fazenda').value || 'Fazenda';
    const proprietario = document.getElementById('proprietario').value || 'Não informado';
    const municipio = document.getElementById('municipio').value || 'Não informado';
    const estado = document.getElementById('estado').value || '';
    const area = document.getElementById('area').value || '0';
    const perimetro = document.getElementById('perimetro').value || '0';

    const conteudo = `RELATÓRIO DA PROPRIEDADE RURAL
==============================
Gerado por AgroMap

DADOS DA PROPRIEDADE
Nome: ${nome}
Proprietário: ${proprietario}
Localização: ${municipio}${estado ? '/' + estado : ''}
Área total: ${area} ha
Perímetro: ${perimetro} km

ATIVIDADES REGISTRADAS
- Lavoura: 40%
- Pastagem: 30%
- Reserva legal: 20%
- Área de preservação: 10%

==============================
Relatório gerado em ${new Date().toLocaleDateString('pt-BR')}
AgroMap - Tecnologia espacial para o pequeno produtor rural
`;

    const blob = new Blob([conteudo], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `relatorio-${nome.toLowerCase().replace(/\s/g, '-')}.txt`;
    a.click();
    URL.revokeObjectURL(url);

    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

function limparFormulario() {
    document.getElementById('nome-fazenda').value = '';
    document.getElementById('proprietario').value = '';
    document.getElementById('municipio').value = '';
    document.getElementById('estado').value = '';
    document.getElementById('area').value = '';
    document.getElementById('perimetro').value = '';
    document.getElementById('preview-area').textContent = '—';
    document.getElementById('preview-perimetro').textContent = '—';
    document.getElementById('preview-local').textContent = '—';
}