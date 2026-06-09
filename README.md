# 🌱 AgroMap

> Plataforma web de gestão rural que democratiza o acesso ao georreferenciamento de propriedades agrícolas, permitindo que pequenos produtores delimitem, organizem e gerenciem suas terras de forma simples e intuitiva.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Leaflet](https://img.shields.io/badge/Leaflet-199900?style=flat&logo=leaflet&logoColor=white)

---

## 📋 Sobre o Projeto

O **AgroMap** é uma plataforma desenvolvida para auxiliar pequenos produtores rurais no processo de organização territorial de suas propriedades.

O produtor pode cadastrar as dimensões do seu terreno, visualizá-lo no mapa via imagens de satélite, subdividi-lo por tipo de atividade agrícola e exportar um relatório completo — tudo sem precisar de engenheiros ou equipamentos caros.

> Projeto desenvolvido para o **Global Solution — FIAP 2026**.

---

## 🎯 O Problema

O processo de georreferenciamento rural no Brasil costuma ser caro, burocrático e dependente de profissionais especializados. Como consequência, muitos agricultores enfrentam dificuldades para regularizar propriedades, solicitar financiamentos rurais (como o PRONAF) e planejar o uso eficiente da terra.

O AgroMap surge para tornar o acesso a essas informações territoriais mais simples e democrático.

---

## 🚀 Funcionalidades

### 🗺️ Meu Terreno
- Cadastro de nome, largura e comprimento da propriedade
- Cálculo automático de área (m²) e perímetro (m)
- Visualização em mapa com imagens de satélite via **Leaflet + Esri**
- Seleção de localização por cidade e estado
- Dados persistidos via `localStorage`

### 🌾 Atividades
- Criação de subdivisões agrícolas com nome, descrição e porcentagem de área
- Cálculo automático da área ocupada em m² por atividade
- Validação de limite de 100% da área total
- Exclusão individual de atividades
- Lista persistida via `localStorage`

### 📄 Relatório
- Formulário com dados completos da propriedade
- Preview em tempo real de área, perímetro e localização
- Leitura automática das atividades cadastradas
- Exportação em `.txt` com todas as informações consolidadas

### 📬 Contato
- Formulário com validação de campos
- Feedback visual de sucesso ou erro

### 📖 Páginas Institucionais
- **Início:** hero section com apresentação da plataforma
- **Sobre:** missão, jornada e diferenciais do projeto
- **Integrantes:** cards com foto, LinkedIn e GitHub da equipe
- **FAQ:** dúvidas frequentes sobre o sistema

---

## 🗂️ Estrutura do Projeto

```text
AgroMap/
│
├── index.html
│
├── pages/
│   ├── sobre.html
│   ├── integrantes.html
│   ├── meuterreno.html
│   ├── atividades.html
│   ├── relatorio.html
│   ├── faq.html
│   └── contato.html
│
├── css/
│   ├── styles.css        ← estilos globais e variáveis
│   ├── home.css
│   ├── sobre.css
│   ├── integrantes.css
│   ├── terreno.css
│   ├── atividade.css
│   ├── relatorio.css
│   ├── faq.css
│   └── contato.css
│
├── js/
│   ├── nav.js            ← menu mobile
│   ├── terreno.js        ← cálculo e mapa
│   ├── atividade.js      ← CRUD de atividades
│   ├── relatorio.js      ← preview e exportação
│   └── contato.js        ← validação do formulário
│
├── assents/              ← imagens, ícones e fotos
│
└── README.md
```

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura semântica das páginas |
| CSS3 | Estilização, responsividade e variáveis CSS |
| JavaScript (Vanilla) | Lógica de negócio, DOM e `localStorage` |
| Leaflet.js | Mapa interativo com imagens de satélite |
| Esri World Imagery | Tiles de satélite no mapa |
| Git / GitHub | Versionamento e hospedagem |

---

## 🎨 Design System

```css
:root {
  --color-green-dark:  #1F7A36;
  --color-green-light: #3DB54A;
  --color-white:       #FFFFFF;
  --color-black:       #000000;
  --color-gray-light:  #F5F5F5;
  --color-gray-mid:    #CCCCCC;
  --color-gray-text:   #555555;
  --color-focus-ring:  rgba(31, 122, 54, 0.2);
}
```

---

## ▶️ Como Rodar

Não requer instalação de dependências. Basta clonar e abrir no navegador.

```bash
git clone https://github.com/Gs-AgroMap/AgroMap.git
cd AgroMap
```

Abra o `index.html` diretamente no navegador, ou use a extensão **Live Server** do VS Code para desenvolvimento com hot reload.

> **Nota:** o mapa da página "Meu Terreno" requer conexão com a internet para carregar as imagens de satélite via Leaflet/Esri.

---

## 👥 Integrantes

| Nome | RM | LinkedIn | GitHub |
|---|---|---|---|
| Andrei Oliveira de Sousa | 573373 | [linkedin](https://www.linkedin.com/in/andrei-sousa-55662825a/) | [andreisou-dev](https://github.com/andreisou-dev) |
| Felipe Coelho da Fonseca | 572133 | [linkedin](https://www.linkedin.com/in/felipe-coelho-80b78a394) | [devfcoelho](https://github.com/devfcoelho) |
| Henrique Soares Pereira | 569898 | [linkedin](https://www.linkedin.com/in/henrique-soares-pereira/) | [Henriquesope](https://github.com/Henriquesope) |
| Luiz Felipe Lourenço da Silva | 572576 | [linkedin](https://www.linkedin.com/in/lfelipelourenco) | [devlipee](https://github.com/devlipee) |

---

## 📄 Licença

Projeto desenvolvido exclusivamente para fins acadêmicos — **Global Solution FIAP 2026**.

---

<p align="center">🌱 AgroMap • FIAP 2026 • Global Solution</p>