Este código é um **WebApp de Cardápio Digital Interativo**, projetado especificamente para uma nanopadaria artesanal (**Pão do Ciso**). Ele funciona como uma "Single Page Application" (SPA) que permite ao cliente selecionar produtos, personalizar com opcionais, visualizar o total em tempo real e enviar o pedido diretamente para o WhatsApp e para uma planilha de controle.

Abaixo, organizei o arquivo `README.md` detalhando as funcionalidades e a estrutura técnica:

---

# 🍞 Pão do Ciso - Cardápio Digital v2.0

Este repositório contém o código-fonte do sistema de pedidos da **Pão do Ciso**. O objetivo é oferecer uma experiência de compra fluida para o cliente e uma gestão organizada para o administrador.

## 🚀 Funcionalidades Principais

### Para o Cliente

* **Identificação Simples:** Cadastro rápido de nome e WhatsApp.
* **Menu por Categorias:** Navegação rápida com botões fixos (âncoras) para diferentes seções do cardápio.
* **Personalização Dinâmica:** Itens podem ter opcionais (ex: azeite, recheios extras). O valor é somado instantaneamente ao preço do item.
* **Cesta de Compras Inteligente:**
* Visualização de subtotal e itens selecionados.
* Possibilidade de remover itens individualmente.
* Cálculo automático de total com suporte a múltiplas quantidades.


* **Finalização via WhatsApp:** Gera uma mensagem formatada profissionalmente com todos os detalhes do pedido e envia para o número da padaria.

### Para o Administrador

* **Integração com Google Sheets:** O sistema envia os dados de cada pedido (Cliente, Itens, Total, Data) para uma planilha via Google Apps Script.
* **Alimentação Dinâmica:** O cardápio é alimentado por um arquivo externo `cardapio.js`, facilitando a atualização de preços e produtos sem mexer na estrutura do código principal.

---

## 🛠️ Estrutura Técnica

O projeto foi construído utilizando tecnologias nativas (Vanilla Tech), garantindo leveza e velocidade:

* **HTML5 & CSS3:** Layout responsivo focado em dispositivos móveis (*Mobile First*), com variáveis CSS para fácil alteração da paleta de cores.
* **JavaScript (ES6+):**
* **Renderização Dinâmica:** Os cards de produtos são gerados a partir de um objeto JSON.
* **Lógica de Estado:** Gerenciamento de carrinho em tempo real.
* **Ajuste de Padding Dinâmico:** O corpo da página se adapta ao tamanho da cesta para evitar que o rodapé oculte conteúdo.


* **Integração de Dados:** Uso da API `fetch` para comunicação assíncrona com o Google Apps Script.

---

## 📂 Arquivos do Projeto

| Arquivo | Função |
| --- | --- |
| `index.html` | Estrutura principal, estilos (CSS) e lógica do cliente (JS). |
| `cardapio.js` | Banco de dados dos produtos, preços, fotos e opcionais. |
| `script_google.gs` | (Servidor) Recebe os pedidos e grava na Planilha Google. |

---

## 🎨 Identidade Visual (Design)

* **Cores Primárias:** Verde Musgo (`#2d3a27`) e Marrom Café (`#7d4f39`).
* **Fundo:** Creme Papel (`#fdf5e6`) para uma leitura confortável e estética artesanal.
* **Ícones:** Integrados via SVG (Instagram) para garantir carregamento instantâneo.

---

## 📝 Como Atualizar o Cardápio

Para alterar produtos ou preços, basta editar o arquivo `cardapio.js` seguindo o formato:

```javascript
{
  nome: "Nome do Panino",
  preco: 18.00,
  img: "url-da-foto.jpg",
  opcionaisIds: ["Azeite", "Dobro de Queijo"]
}

```

---

**Desenvolvido para Pão do Ciso.** *Boas fornadas e boas vendas!* 🥖

---

Deseja que eu te ajude a criar também o código do **Google Apps Script** para garantir que a planilha receba esses dados corretamente?
