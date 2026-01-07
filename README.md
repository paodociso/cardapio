Este README descreve o ecossistema do **Pão do Ciso (V19.0)**, um webapp focado em vendas via WhatsApp com gestão de cardápio dinâmica. O sistema é composto por uma interface de vendas para o cliente (`index-teste.html`) e uma interface de administração (`gestao-cardapio.html`).

---

# 🥖 Pão do Ciso - V19.0

Sistema de cardápio digital interativo projetado para automação de pedidos, cálculo de opcionais e integração direta com WhatsApp e Google Sheets.

## 🚀 Funcionalidades Principais

### 1. Cardápio Inteligente e Dinâmico

* **Categorias Expansíveis**: Organização dos produtos em seções colapsáveis (Pães, Antipasti, Panini, etc.) para facilitar a navegação.
* **Cálculo em Tempo Real**: O sistema calcula automaticamente o subtotal de cada item conforme a quantidade e os opcionais selecionados são alterados.
* **Gestão de Opcionais**: Suporte a diferentes listas de opcionais baseadas no tipo de produto (ex: opcionais específicos para Panini vs. opcionais gerais para Pães).

### 2. Fluxo de Checkout Automatizado

* **Cesta de Compras**: Barra inferior fixa que exibe o total acumulado e permite revisar os itens antes de finalizar.
* **Persistência de Dados**: Utiliza `localStorage` para salvar os dados do cliente (nome, telefone e endereço), evitando que ele precise digitar tudo novamente em pedidos futuros.
* **Múltiplas Formas de Pagamento**: Suporte a Pix (com cópia de chave e QR Code), Cartão e Dinheiro.

### 3. Confirmação e Envio (WhatsApp)

* **Modal de Salvamento**: Ao finalizar, o sistema exibe um modal de confirmação: *"Seu pedido foi salvo! Você será automaticamente direcionado..."*.
* **Timer de Redirecionamento**: Aguarda **4 segundos** para garantir que o usuário leia a confirmação antes de abrir o WhatsApp.
* **Integração com Planilha**: Envia os dados do pedido automaticamente para uma Planilha Google via API (Google Apps Script) para controle gerencial.

### 4. Gestor de Cardápio (`gestao-cardapio.html`)

* **Edição Direta**: Interface administrativa para alterar nomes, descrições, preços e links de imagens dos produtos.
* **Gerenciamento de Seções**: Permite adicionar ou remover itens de categorias específicas e gerenciar as listas de opcionais.
* **Exportação de Dados**: Gera o código formatado para o arquivo `cardapio.js`, permitindo atualizações rápidas do inventário.

---

## 🛠️ Tecnologias Utilizadas

* **Frontend**: HTML5, CSS3 (variáveis e animações), JavaScript (Vanilla).
* **Ícones**: Font Awesome 6.0.
* **Backend/Storage**:
* Google Apps Script (para integração com Planilhas).
* `localStorage` (armazenamento local no navegador do cliente).


* **Comunicação**: Protocolo `wa.me` para integração com WhatsApp.

---

## 📋 Como Atualizar o Cardápio

1. Abra o arquivo `gestao-cardapio.html` no seu navegador.
2. Realize as alterações desejadas nos itens ou preços.
3. Clique em **"Gerar Código para cardapio.js"**.
4. Copie o código gerado e substitua todo o conteúdo do seu arquivo `cardapio.js` atual.
5. Salve o arquivo e atualize o site do cliente.

---

**Deseja que eu adicione uma seção de "Guia de Instalação" detalhando como configurar o Google Apps Script para a planilha?**