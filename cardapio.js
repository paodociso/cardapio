// cardapio.js
const dadosIniciais = {
  opcionais: [
    ["Azeite", "1.00"], ["Pesto tradicional", "1.00"], ["Pesto de azeitona", "1.00"], 
    ["Maionese", "1.00"], ["Maionese temperada", "1.00"], ["Pastinha de goronzola", "2.00"], 
    ["Pastinha de parmesão", "2.00"], ["Pastinha de pimentão vermelho", "2.00"], 
    ["Sardella", "2.00"], ["Alichella", "2.00"], ["Picles de cebola", "2.00"], 
    ["Chancliche", "7.00"], ["Chancliche apimentado", "7.00"], ["Muçarela", "3.00"], 
    ["Provolone", "5.00"], ["Queijo Prato", "5.00"],
    ["Sardela – 100g", "20.00"], ["Alichela – 100g", "20.00"], 
    ["Melanzane sott'olio – 100g", "20.00"], ["Manteiga temperada – 100g", "20.00"], 
    ["Confit de alho – 100g", "20.00"], ["Confit de alho com tomates cereja – 100g", "20.00"], 
    ["Picles de cebola – 100g", "20.00"]
  ],

  secoes: [
    {
      nome: "Antipasti",
      itens: [
        [
          "Sardela – 100g", 
          "20.00", 
          "https://via.placeholder.com/60", 
          [], 
          "Tradicional antepasto italiano à base de pimentão vermelho e aliche."
        ],
        [
          "Alichela – 100g", 
          "20.00", 
          "https://via.placeholder.com/60", 
          [], 
          "Conserva de aliche (anchovas) com salsa e azeite extra virgem."
        ],
        [
          "Melanzane sott'olio – 100g", 
          "20.00", 
          "https://via.placeholder.com/60", 
          [], 
          "Berinjela marinada no azeite com ervas finas."
        ],
        [
          "Manteiga temperada – 100g", 
          "20.00", 
          "https://via.placeholder.com/60", 
          [], 
          "Manteiga artesanal com flor de sal e mix de ervas."
        ],
        [
          "Confit de alho – 100g", 
          "20.00", 
          "https://via.placeholder.com/60", 
          [], 
          "Dentes de alho cozidos lentamente no azeite até ficarem cremosos."
        ],
        [
          "Confit de alho com tomates cereja – 100g", 
          "20.00", 
          "https://via.placeholder.com/60", 
          [], 
          "Mix de tomates cereja e alho confitados."
        ],
        [
          "Picles de cebola – 100g", 
          "20.00", 
          "https://via.placeholder.com/60", 
          [], 
          "Cebola roxa marinada em vinagre especial e especiarias."
        ]
      ]
    },
    {
      nome: "Pães de fermentação natural",
      itens: [
        [
          "Pão Italiano", 
          "35.00", 
          "https://via.placeholder.com/60", 
          ["Sardela – 100g", "Alichela – 100g", "Melanzane sott'olio – 100g", "Manteiga temperada – 100g", "Confit de alho – 100g", "Confit de alho com tomates cereja – 100g", "Picles de cebola – 100g"], 
          "Pão clássico de casca grossa e miolo aerado, fermentado por 48h."
        ],
        [
          "Pão de Campanha", 
          "35.00", 
          "https://via.placeholder.com/60", 
          ["Sardela – 100g", "Alichela – 100g", "Melanzane sott'olio – 100g", "Manteiga temperada – 100g", "Confit de alho – 100g", "Confit de alho com tomates cereja – 100g", "Picles de cebola – 100g"], 
          "Pão rústico com blend de farinhas integrais e sabor marcante."
        ]
      ]
    },
    {
      nome: "Panini",
      itens: [
        [
          "Monte seu Panino", 
          "5.00", 
          "https://via.placeholder.com/60", 
          ["Azeite", "Pesto tradicional", "Pesto de azeitona", "Maionese", "Maionese temperada", "Pastinha de goronzola", "Pastinha de parmesão", "Pastinha de pimentão vermelho", "Sardella", "Alichella", "Picles de cebola", "Chancliche", "Chancliche apimentado", "Muçarela", "Provolone", "Queijo Prato"], 
          "Base de pão artesanal. Escolha seus acompanhamentos abaixo."
        ]
      ]
    }
  ]
};