# 🌱 AgroMap

> Plataforma web de gestão rural que democratiza o acesso ao georreferenciamento de propriedades agrícolas, permitindo que pequenos produtores delimitem, organizem e gerenciem suas terras de forma simples, acessível e intuitiva.

---

## 📋 Sobre o Projeto

O **AgroMap** é uma plataforma desenvolvida para auxiliar pequenos e médios produtores rurais no processo de organização territorial de suas propriedades.

A solução permite que o agricultor visualize sua propriedade por meio de imagens de satélite, delimite os limites do terreno, crie subdivisões internas para diferentes usos e organize informações importantes da fazenda em uma única interface.

O principal objetivo da plataforma é preparar o produtor para o processo oficial de georreferenciamento junto ao INCRA, reduzindo custos, tempo e complexidade operacional.

Projeto desenvolvido para o **Global Solution — FIAP 2026**.

---

## 🎯 Problema

O processo de georreferenciamento rural no Brasil costuma ser:

* Caro;
* Burocrático;
* Dependente de profissionais especializados;
* Pouco acessível para pequenos produtores.

Como consequência, muitos agricultores enfrentam dificuldades para:

* Regularizar propriedades;
* Solicitar financiamentos rurais;
* Participar de programas governamentais;
* Planejar a utilização eficiente da terra;
* Evitar conflitos de limites territoriais.

O AgroMap surge para tornar esse processo mais acessível por meio da tecnologia.

---

## 💡 Solução Proposta

A plataforma oferece dois pilares principais:

### 🛰️ Georreferenciamento Inteligente

* Visualização da propriedade através de imagens de satélite;
* Delimitação digital do perímetro da propriedade;
* Apoio por geolocalização;
* Verificação de sobreposição entre áreas cadastradas;
* Exportação de relatórios para apoio ao georreferenciamento oficial.

### 🚜 Gestão da Propriedade por Subdivisões

* Criação de áreas internas personalizadas;
* Organização visual da fazenda;
* Cadastro de zonas de plantação;
* Controle de pastagens;
* Adição de observações e anotações importantes.

---

## 🚀 Funcionalidades

* Página inicial apresentando a plataforma;
* Sistema de gerenciamento de terrenos;
* Organização de subdivisões agrícolas;
* Controle de atividades da propriedade;
* Navegação dinâmica com JavaScript;
* FAQ com dúvidas frequentes;
* Formulário de contato;
* Página institucional sobre o projeto;
* Página de integrantes da equipe.

---

## 🗂️ Estrutura do Projeto

```text
AGROMAP/
│
├── index.html
│
├── pages/
│   ├── sobre.html
│   ├── integrantes.html
│   ├── faq.html
│   ├── contato.html
│   ├── atividades.html
│   └── meuterreno.html
│
├── css/
│   ├── styles.css
│   ├── home.css
│   ├── sobre.css
│   ├── integrantes.css
│   ├── faq.css
│   ├── contato.css
│   ├── atividade.css
│   └── terreno.css
│
├── js/
│   ├── nav.js
│   ├── contato.js
│   ├── atividade.js
│   └── terreno.js
│
├── assets/
│   ├── imagens
│   ├── ícones
│   ├── fotos dos integrantes
│   └── recursos visuais
│
└── README.md
```

---

## 🏆 Diferenciais Competitivos

| Diferencial            | Descrição                                                          |
| ---------------------- | ------------------------------------------------------------------ |
| Acessibilidade         | Plataforma web acessível sem necessidade de software especializado |
| Baixo custo            | Alternativa mais econômica ao processo tradicional                 |
| Autoatendimento guiado | Interface intuitiva para usuários sem conhecimento técnico         |
| Gestão integrada       | Georreferenciamento e gestão interna em um único sistema           |
| Organização visual     | Subdivisão da propriedade de forma prática                         |
| Alertas inteligentes   | Identificação de possíveis sobreposições de áreas                  |

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia              | Uso                              |
| ----------------------- | -------------------------------- |
| HTML5                   | Estrutura das páginas            |
| CSS3                    | Estilização e responsividade     |
| JavaScript (Vanilla JS) | Interatividade e funcionalidades |
| Git                     | Controle de versão               |
| GitHub                  | Hospedagem do projeto            |

---

## 🎨 Design System

```css
:root {
  --color-black:       #000000;
  --color-green-dark:  #1F7A36;
  --color-green-light: #3DB54A;
  --color-white:       #FFFFFF;
  --color-gray-light:  #F5F5F5;
  --color-gray-mid:    #CCCCCC;
  --color-gray-text:   #555555;
  --color-focus-ring:  rgba(31, 122, 54, 0.2);
  --color-gray-home:   #747474;
}
```

### Paleta de Cores

| Cor          | Hexadecimal |
| ------------ | ----------- |
| Verde Escuro | #1F7A36     |
| Verde Claro  | #3DB54A     |
| Branco       | #FFFFFF     |
| Preto        | #000000     |
| Cinza Claro  | #F5F5F5     |
| Cinza Médio  | #CCCCCC     |
| Cinza Texto  | #555555     |

---

## 📱 Responsividade

O AgroMap foi desenvolvido para proporcionar uma experiência consistente em diferentes dispositivos:

* 📱 Smartphones
* 📱 Tablets
* 💻 Notebooks
* 🖥️ Monitores Desktop

---

## ▶️ Como Rodar o Projeto

```bash
# Clone o repositório
git clone https://github.com/Gs-AgroMap/AgroMap.git

# Entre na pasta do projeto
cd agromap

# Abra o arquivo principal
index.html
```

### Desenvolvimento

Para facilitar o desenvolvimento, recomenda-se utilizar a extensão **Live Server** do VS Code.

---

## 👥 Integrantes

| Nome                          | RM     |
| ----------------------------- | ------ |
| Andrei Oliveira de Sousa      | 573373 |
| Felipe Coelho da Fonseca      | 572133 |
| Henrique Soares Pereira       | 569898 |
| Luiz Felipe Lourenço da Silva | 572576 |

---

## 🌎 Proposta de Valor

> "Delimite, organize e valorize sua terra — de qualquer lugar, sem precisar de um especialista."

O AgroMap entrega ao pequeno produtor rural uma ferramenta acessível para compreender melhor sua propriedade, organizar informações territoriais e facilitar futuras etapas de regularização fundiária.

---

## 📄 Licença

Este projeto foi desenvolvido exclusivamente para fins acadêmicos no contexto do **Challenge FIAP 2026 — Global Solution**.

---

<p align="center">
🌱 AgroMap • FIAP 2026 • Global Solution
</p>

