---

# 🥖 Pão do Ciso - Cardápio Digital & Gestão

Este projeto é uma solução completa para pedidos online de pães artesanais e produtos de fermentação natural. O sistema permite que clientes visualizem o cardápio, selecionem opcionais, montem seu carrinho e enviem o pedido diretamente via WhatsApp, além de oferecer um painel administrativo para gestão de produtos e preços.

## 🚀 Estrutura do Projeto

O sistema é composto por três arquivos principais:

* **`index.html`**: A interface do cliente (Cardápio Digital). Responsável pela exibição dos produtos, cálculos de subtotal, formulário de entrega e integração com a API do WhatsApp.
* **`cardapio.js`**: A base de dados inicial e estrutura de dados do sistema. Contém as definições de categorias, itens, preços e listas de opcionais.
* **`gestao-cardapio.html`**: O painel administrativo. Permite ao gestor alterar preços, adicionar/remover itens, organizar a ordem das seções e atualizar a data da próxima fornada sem mexer no código.

---

## 🛠️ Funcionalidades

### 🛒 Para o Cliente

* **Interface Responsiva**: Otimizada para dispositivos móveis.
* **Seleção Dinâmica**: Escolha de opcionais (como tipos de taças para vinhos ou acompanhamentos para pães).
* **Carrinho em Tempo Real**: Cálculo automático de totais e sub-totais.
* **Fluxo de Checkout**: Coleta de dados de entrega/retirada e geração de mensagem formatada para o WhatsApp do estabelecimento.
* **Aviso de Fornada**: Modal informativo com datas de produção e limite para pedidos.

### ⚙️ Para o Administrador

* **Gerenciamento de Estoque**: Ativar/Desativar itens rapidamente (disponibilidade).
* **Editor de Preços e Descrições**: Alteração direta na interface administrativa.
* **Organização por Drag-and-Drop**: Reordenação de itens e seções usando a biblioteca `SortableJS`.
* **Persistência Local**: Utiliza `localStorage` para salvar as alterações feitas no painel, garantindo que as modificações reflitam no cardápio.
* **Exportação de Dados**: Função para gerar um novo arquivo `cardapio.js` ou copiar o JSON atualizado.

---

## 💻 Tecnologias Utilizadas

* **HTML5 / CSS3**: Estrutura e estilização moderna com variáveis CSS.
* **JavaScript (Vanilla)**: Lógica de negócio, manipulação de DOM e persistência de dados.
* **SortableJS**: Biblioteca para reordenação de itens por arrasto.
* **Font Awesome**: Ícones para interface.
* **Google Fonts**: Tipografia personalizada.

---

## 📋 Como Usar

1. **Configuração Inicial**: Certifique-se de que os três arquivos (`index.html`, `cardapio.js`, `gestao-cardapio.html`) estejam na mesma pasta.
2. **Acesso ao Painel**: Abra o arquivo `gestao-cardapio.html` para configurar seus produtos e a data da próxima fornada.
3. **Publicação**: O sistema pode ser hospedado em qualquer serviço de páginas estáticas (GitHub Pages, Vercel, Netlify ou até mesmo via FTP em um servidor simples).
4. **Pedidos**: As mensagens de pedidos serão enviadas para o número configurado na função `enviarWhatsApp` no arquivo `index.html`.

---

## 🔒 Segurança e Dados

Os dados de gestão são salvos no `localStorage` do navegador. Para uma mudança definitiva que persista em todos os dispositivos dos clientes, as alterações feitas no painel administrativo devem ser copiadas e coladas de volta no arquivo `cardapio.js` (ou salvas via backend, se implementado futuramente).

---

## 📝 Licença

Este projeto foi desenvolvido para o uso exclusivo da marca **Pão do Ciso**.

---