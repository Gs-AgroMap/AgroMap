# AgroMap 🌱

Plataforma web voltada ao pequeno produtor rural brasileiro para organizar, delimitar e gerenciar dados da propriedade antes do georreferenciamento oficial (INCRA).

---

## Índice

- [Sobre o projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Estrutura de arquivos](#estrutura-de-arquivos)
- [Páginas](#páginas)
- [Integrantes](#integrantes)

---

## Sobre o projeto

O AgroMap foi desenvolvido como projeto acadêmico de primeiro semestre do curso de Análise e Desenvolvimento de Sistemas da FIAP (Global Solution 2025).

O produtor rural muitas vezes não conhece os dados básicos do próprio terreno — área, perímetro, divisão por atividade. O AgroMap resolve isso com uma interface simples, sem necessidade de conhecimento técnico ou contratação de especialistas pagos só para entender a propriedade.

---

## Funcionalidades

- **Delimitar Terreno** — cadastro de largura e comprimento com cálculo automático de área e perímetro, salvos via `localStorage`
- **Mapa interativo** — visualização com imagens de satélite via Leaflet.js + Esri
- **Gestão de atividades** — criação de atividades com nome, descrição e percentual de área ocupada, com validação de capacidade
- **FAQ** — perguntas frequentes com link direto para contato
- **Contato** — formulário com validação e feedback em página (sem `alert`)
- **Integrantes** — apresentação da equipe com links para LinkedIn e GitHub
- **Navbar responsiva** — menu hamburger para mobile

---

## Tecnologias

| Tecnologia | Uso |
|---|---|
| HTML5 semântico | Estrutura de todas as páginas |
| CSS3 + Custom Properties | Estilização global e por página |
| JavaScript (vanilla) | Lógica de formulários, localStorage, DOM |
| Leaflet.js v1.9.4 | Mapa interativo com camada de satélite |
| Google Fonts (Inter) | Tipografia |
| Git / GitHub | Versionamento |

---

## Estrutura de arquivos

```
AGROMAP/
│
├── index.html
│
├── pages/
│   ├── sobre.html
│   ├── integrantes.html
│   ├── meuterreno.html
│   ├── atividades.html
│   ├── faq.html
│   └── contato.html
│
├── css/
│   ├── styles.css        # Estilos globais (navbar, botões, formulários)
│   ├── home.css          # Hero e cards da home
│   ├── terreno.css       # Página Meu Terreno
│   ├── atividade.css     # Página Atividades
│   ├── sobre.css         # Página Sobre
│   ├── integrantes.css   # Página Integrantes
│   ├── faq.css           # Página FAQ
│   └── contato.css       # Página Contato
│
├── js/
│   ├── nav.js            # Hambúrguer menu mobile
│   ├── terreno.js        # Cálculo de área/perímetro e localStorage
│   ├── atividade.js      # CRUD de atividades com localStorage
│   └── contato.js        # Validação e feedback do formulário
│
└── assents/              # Imagens e ícones do projeto
```

---

## Páginas

| Página | Arquivo | Descrição |
|---|---|---|
| Início | `index.html` | Hero + cards de funcionalidades |
| Sobre | `pages/sobre.html` | Missão, jornada e solução |
| Integrantes | `pages/integrantes.html` | Equipe com links sociais |
| Meu Terreno | `pages/meuterreno.html` | Cadastro de terreno + mapa |
| Atividades | `pages/atividades.html` | Gestão de atividades agrícolas |
| FAQ | `pages/faq.html` | Perguntas frequentes |
| Contato | `pages/contato.html` | Formulário de contato |

---

## Integrantes

| Nome | RM | LinkedIn | GitHub |
|---|---|---|---|
| Andrei Oliveira de Sousa | 573373 | [LinkedIn](https://www.linkedin.com/in/andrei-sousa-55662825a/) | [GitHub](https://github.com/andreisou-dev) |
| Felipe Coelho da Fonseca | 572133 | [LinkedIn](https://www.linkedin.com/in/felipe-coelho-80b78a394) | [GitHub](https://github.com/devfcoelho) |
| Henrique Soares Pereira | 569898 | [LinkedIn](https://www.linkedin.com/in/henrique-soares-pereira/) | [GitHub](https://github.com/Henriquesope) |
| Luiz Felipe Lourenço da Silva | 572576 | [LinkedIn](https://www.linkedin.com/in/lfelipelourenco) | [GitHub](https://github.com/devlipee) |

---

**FIAP — Análise e Desenvolvimento de Sistemas — Global Solution 2025**
