# 🥖 Pão do Ciso - Loja Digital (Versão 17.0)

Esta é a solução definitiva de e-commerce para o **Pão do Ciso**, projetada para operar diretamente do navegador com integração dupla: **WhatsApp** para atendimento e **Google Sheets** para gestão administrativa.

## 🚀 Novidades da Versão 17

* **Automação de Dados (Google Sheets):** Ao finalizar um pedido, os dados são enviados automaticamente para uma planilha Google antes mesmo de abrir o WhatsApp. Isso garante que nenhum pedido seja perdido.
* **Persistência de Recompra:** O sistema memoriza Nome, Telefone e Endereço do cliente. Em pedidos futuros, os campos já aparecem preenchidos para conferência, agilizando a jornada de compra.
* **Cabeçalho Profissional:** Layout refinado com alinhamento preciso de logótipo e informações de contato.
* **Delay de Finalização:** Uma pausa de 3 segundos com mensagem de "Finalizado!" antes do redirecionamento, melhorando a percepção de segurança do usuário.

## 🛠️ Funcionalidades Principais

1. **Cardápio Inteligente:** Categorias expansíveis com suporte a opcionais complexos (potinhos e recheios de paninis).
2. **Cálculo em Tempo Real:** Subtotais atualizados instantaneamente conforme o usuário adiciona opcionais ou altera quantidades.
3. **Gestão de Entrega:** Diferenciação clara entre Retirada e Entrega em domicílio.
4. **Pagamento Integrado:** - Pix com QR Code e Chave visíveis.
* Opções de Cartão e Dinheiro com avisos de pagamento no ato da entrega.


5. **Relatório de Pedido:** Mensagem de WhatsApp profissionalmente formatada com hierarquia visual (itens e opcionais).

## 📊 Estrutura da Planilha

O sistema está configurado para enviar os dados para as seguintes colunas (a partir da Coluna A):

1. **Data/Hora** (Gerado automaticamente pelo script)
2. **Nome**
3. **Telefone**
4. **Tipo de Entrega**
5. **Endereço**
6. **Itens** (Lista consolidada de produtos e opcionais)
7. **Total** (Valor final em R$)

## 🔧 Configuração e Manutenção

1. **Link da Planilha:** No arquivo `index.html`, localize a variável `urlPlanilha` na função `salvarNaPlanilha` e substitua `"linkspreadsheet"` pela sua URL do Google Apps Script.
2. **WhatsApp:** O número de destino está definido na função `enviarWhatsApp()`.
3. **Imagens:** Utilize o arquivo `cardapio.js` para atualizar preços, descrições e links de fotos.

## 💻 Requisitos Técnicos

* Desenvolvido em **Vanilla JavaScript** (sem dependências externas).
* **CSS3** com variáveis para fácil alteração da paleta de cores.
* **Google Apps Script** para a ponte entre o site e a planilha.

---

**Pão do Ciso - A tecnologia servindo à tradição.**