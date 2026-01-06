# Pão do Ciso - Sistema de Pedidos Online

## Visão Geral
Sistema completo para pedidos online da nanopadaria artesanal "Pão do Ciso", com cardápio dinâmico, carrinho de compras e integração com WhatsApp.

## Funcionalidades Existentes Mantidas

### ✅ Layout e Interface
- Design responsivo com cores personalizadas (var(--banner), var(--p-green), etc.)
- Banner com logo, nome da loja e links de contato
- Sistema de seções colapsáveis para organizar o cardápio
- Modal para ampliação de imagens dos produtos (com animações)

### ✅ Sistema de Cardápio
- Carregamento dinâmico do cardápio a partir de `cardapio.js`
- Produtos organizados em seções (Antipasti, Pães, Panini)
- Sistema de opcionais por categoria (gerais e específicos para panini)
- Quantificadores para produtos principais e opcionais
- Cálculo automático de subtotal por item

### ✅ Carrinho de Compras
- Adição de itens com quantidades e opcionais
- Cálculo automático do total geral
- Remoção individual de itens do carrinho
- Exibição do carrinho no rodapé da página
- Persistência dos itens durante a sessão

### ✅ Processamento de Pedidos
- Integração com Google Sheets via API
- Envio automático de pedidos por WhatsApp
- Formatação básica da mensagem de pedido

## Novas Funcionalidades Implementadas

### 🆕 1. Banner Aprimorado
- **Melhor espaçamento** entre os links de contato (@paodociso e telefone)
- Organização em coluna flexível com gap de 8px
- Mantida a aparência visual original

### 🆕 2. Sistema de Carrinho Aprimorado
- **Limitação de exibição** para 2 itens visíveis
- **Indicador visual** de rolagem (gradiente no fundo)
- Manutenção da funcionalidade completa de remoção
- Scroll automático quando há mais de 2 itens

### 🆕 3. Novo Fluxo de Compra (Multi-etapas)
#### Etapa 1: Confirmação do Pedido
- Botão **"PROSSEGUIR"** no lugar de "FINALIZAR COMPRA"
- **Modal centralizado** com fundo opaco
- **Lista completa** de itens com numeração romana (I, II, III...)
- **Hierarquia visual** clara para itens e extras (└ indicação)
- Opções: **"ADICIONAR MAIS ITENS"** ou **"CONFIRMAR"**

#### Etapa 2: Coleta de Dados
- **Validação de telefone** (10-11 dígitos obrigatórios)
- **Máscara automática** (XX) XXXXX-XXXX
- Opção: **Retirada** ou **Entrega**
- **Campo condicional** para endereço (aparece só para entrega)
- **Informação sobre taxa** de entrega "a combinar"

#### Etapa 3: Seleção de Pagamento
- **Três opções**: Dinheiro, Cartão, PIX (Preferido)
- **Interface visual** com cards selecionáveis
- **Informações específicas** por forma de pagamento:
  - Dinheiro/Cartão: "Pagamento no recebimento"
  - PIX: Exibe chave `paodociso@gmail.com` e suporte para **QR Code** (IMGPIX)
- **Integração para QR Code**: `<img src="" id="imgPixQR">` - administrador pode inserir imagem

### 🆕 4. Formato de Mensagem WhatsApp Aprrimorado
```
PEDIDO PÃO DO CISO
Cliente: [Nome]
WhatsApp: [Telefone]
Opção: [RETIRADA/ENTREGA]
[Endereço completo] (se entrega)
Taxa a combinar (se entrega)

ITENS:
I 1x [Nome do Item]
   └ 1x [Opcional 1]
   └ 2x [Opcional 2]
   Subtotal: R$ XX.XX

II. 1x [Nome do Item]
   └ 1x [Opcional]
   Subtotal: R$ XX.XX

TOTAL GERAL: R$ XX.XX

FORMA DE PAGAMENTO: [PIX/DINHEIRO/CARTÃO]
[Chave PIX: paodociso@gmail.com] (se PIX)
(Pagamento no recebimento) (se dinheiro/cartão)

[Data e hora]
```

### 🆕 5. Reestruturação do Arquivo cardapio.js
- **Nova ordem dos campos**: 
  ```javascript
  ["Nome do Item", "Descrição", "Preço", "URL da Imagem", ["Opcionais"]]
  ```
- **Compatibilidade total** com o sistema existente
- **Atualização automática** na função de renderização

## Características Técnicas

### 🛡️ Manutenção de Compatibilidade
- Todas as funções JavaScript originais preservadas
- Mesmas classes CSS mantidas
- Sistema de modais coexistente (imagens + pedido)
- Integração com Google Sheets intacta

### 🎨 Design Consistente
- Mesma paleta de cores
- Mesmas fontes e tamanhos
- Animações suaves mantidas
- Responsividade preservada

### 🔄 Fluxo Aprimorado
1. **Navegação no cardápio** → Adição de itens
2. **Carrinho** (rodapé limitado) → PROSSEGUIR
3. **Confirmação** (modal completo) → CONFIRMAR
4. **Dados do cliente** → AVANÇAR
5. **Pagamento** → ENVIAR PELO WHATSAPP
6. **WhatsApp** abre com mensagem formatada

## Pontos de Personalização

### Para o Administrador:
1. **QR Code PIX**: Inserir imagem em `<img src="" id="imgPixQR">`
2. **Cardápio**: Editar `cardapio.js` na nova ordem [nome, descrição, preço, imagem, opcionais]
3. **Opcionais**: Modificar arrays `opcionaisGerais` e `opcionaisPanini`
4. **Contato**: Alterar número do WhatsApp no header e função de envio

## Observações
- Sistema otimizado para mobile-first
- Não requer backend complexo (usa Google Sheets como "database")
- Código totalmente client-side
- Fácil manutenção e atualização
- Experiência do usuário significativamente aprimorada

---

**Status**: ✅ Todas as funcionalidades implementadas e testadas  
**Compatibilidade**: Total com sistema anterior  
**Experiência**: Fluxo mais intuitivo e profissional