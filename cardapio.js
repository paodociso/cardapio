// cardapio.js
const dadosIniciais = {
  opcionais: [
    // - Antipasti (potinhos de 100 gramas)
    //["Azeitonas pretas (100g)", "15.00"],
    //["Azeitonas verdes (100g)", "15.00"],
    ["Alichella (100g)", "20.00"],
    ["Sardella (100g)", "20.00"],
    ["Manteiga temperada (100g)", "17.00"],
    ["Melanzane Sott'olio (100g)", "20.00"],
    ["Picles de cebola (100g)", "15.00"],
    ["Confit de alho (100g)", "20.00"],
    ["Confit de alho e tomates cereja (100g)", "20.00"],
    ["Pote de vidro", "5.00"],

    // - frios
    ["Bresaola", "9.00"],
    ["Lombo piripiri", "9.00"],
    ["Mortadela", "5.00"],
    ["Pastrame", "9.00"],
    ["Presunto cru", "9.00"],
    ["Salame", "7.00"],

    // - queijo(s)
    ["Chancliche", "7.00"],
    ["Chancliche apimentado", "7.00"],
    ["Muçarela", "3.00"],
    ["Provolone", "5.00"],
    ["Queijo Prato", "5.00"],

    // - vegetais
    ["Alface", "0.00"],
    ["Pepino", "0.00"],
    ["Pimentão", "0.00"],
    ["Rúcula", "0.00"],
    ["Tomate", "0.00"],

    // - complementos
    ["Azeite", "1.00"],
    ["Pesto tradicional", "2.00"],
    ["Pesto de azeitona", "2.00"],
    ["Maionese", "1.00"],
    ["Maionese temperada", "1.00"],
    ["Pastinha de goronzola", "2.00"],
    ["Pastinha de parmesão", "2.00"],
    ["Pastinha de pimentão vermelho", "2.00"],
    ["Sardella", "3.00"],
    ["Alichella", "3.00"],
    ["Melanzane sott'olio", "3.00"],
    ["Confit de alho", "2.00"],
    ["Confit de alho e tomates cereja", "3.00"],
    ["Manteiga", "2.00"],
    ["Manteiga temperada com alho e parmesão", "3.00"]
  ],

  secoes: [
    {
      nome: "Antipasti",
      itens: [
        [
          "Sardella – 100g", 
          "20.00", 
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjQr6FhXNpHgq1UNH0_J2bSno3jBTP98sUzlCXzFAAHXXdPFD2ml002SzVE-fvX8pnZ7TXAPZ45fcbMvN6oypcIspRmQzvSvyH9On2BUgnWzrEt77mQWdDo5XSk0hsrg5OrfCEGZWB1a-7htRxs10OhXCM504N4-b1mSmK8FX5z9O4d84Y3pri-cJtqUOE/s320/IMG_20201202_174720.jpg", 
          ["Pote de vidro"], 
          "Tradicional antepasto italiano à base de pimentão vermelho e aliche."
        ],
        [
          "Alichella – 100g", 
          "20.00", 
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjB6CH6FBqAhBXaVZiqLdjRqhlXGeDsrhkxKNgpRaeZw6lVWyGJ92hhVzNU4GxLFqq_B651AwJVwi1axSj58lPa6bkByQtR8RuSBk2EkdFLmPhcb-y3V4yyt-WOXjCBvVsaRbS2IsIW_b4YglTwG9YkHncLqWdrEo7SiFdLT3f7KIq4Mfi3ayKaN_vJSp4/s320/IMG_20201202_174740.jpg", 
          ["Pote de vidro"], 
          "Conserva de aliche (anchovas) com salsa e azeite extra virgem."
        ],
        [
          "Melanzane Sott'olio – 100g", 
          "20.00", 
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjygUAEJw4jjQR0fWMII5hc7QX1Ppu22I32LXjNTfcxf7B43coy-6gOXmdPiwCrL_NyWFuPM3HYzifiS_CuiqAD6efRxq9eYdbrr5I8C7x_jyn6I3w-OBplN5w184KYh5ZDnSF6iR6Bl6HQP5kRz8iycmQtRIfbeSR-5WvkfyQ7CFOuQKVLwwNPs5H_nj4/s4032/IMG_20201202_174658.jpg", 
          ["Pote de vidro"], 
          "Berinjela em conserva, marinada com alho e ervas em azeite de oliva, um clássico italiano."
        ],
        [
          "Manteiga temperada – 100g", 
          "17.00", 
          "https://i0.wp.com/essareceitafunciona.com.br/wp-content/uploads/2022/08/Manteiga-temperada-Essa-Receita-Funciona-1.jpg?resize=683%2C1024&ssl=1", 
          ["Pote de vidro"], 
          "Manteiga amanteigada com ervas frescas e temperos, perfeita para untar pães."
        ],
        [
          "Picles de cebola – 100g", 
          "17.00", 
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj4_qCb1HDgQQJ_28yAzCCZ1DkiP9OQNHrQA&s", 
          ["Pote de vidro"], 
          "Cebolas em conserva agridoce, crocantes e levemente ácidas."
        ],
        [
          "Confit de alho – 100g", 
          "20.00", 
          "https://francinha.com/novo/wp-content/uploads/2020/12/alho-confit-10.jpg", 
          ["Pote de vidro"], 
          "Alho cozido lentamente em azeite até ficar cremoso e adocicado."
        ],
        [
          "Confit de alho e tomates cereja – 100g", 
          "20.00", 
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg-1J_u_Kx2CIKSxLN1kASv_KQoogDYMioEA&s", 
          ["Pote de vidro"], 
          "Alho confitado com tomates cereja, uma combinação doce e intensa."
        ]
      ]
    },
    {
      nome: "Pães de fermentação natural",
      itens: [
        [
          "Pão Italiano", 
          "35.00", 
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgMFsu1AGezB-IwKPTAOIKWgIFGjyNAdFfGctT8EsfFLIPX0dFTpVSVuCgF2MYYpmoc1n30aJubSS1I2u6WNmueDDioKeV6yVLIC46C_vxPLxuN82nA4P5kPfHF6A2Qq67v4STkPL4a_ZrYkQCy7OmrEP4qCAjj79bm0Jst4LpKEd0VgU9pzRhgPSmvZY8/s320/IMG_20201101_192911-01.jpeg", 
          [
            "Sardella (100g)", 
            "Alichella (100g)", 
            "Melanzane Sott'olio (100g)", 
            "Manteiga temperada (100g)", 
            "Picles de cebola (100g)",
            "Confit de alho (100g)",
            "Confit de alho e tomates cereja (100g)",
            "Pote de vidro"
          ], 
          "Pão clássico de casca grossa e miolo aerado, fermentado por 48h."
        ]
      ]
    },
    {
      nome: "Panini",
      itens: [
        [
          "Monte seu Panino", 
          "5.00", 
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgg1s3_8QoPb0AIrSs8NwwEG4P1-RtRaHPN1m0nnt6SDrelqKBNmFelf24iT__zBjsbIwIIiYrgPyYAIvB-0Sxwm70qshjJ52bANJ5tz57yffbvGq2ml8M7TADZfvZeMN28FsOHkqfpg0CB3rIfJU5klY1VGDDzDOz-fzu-N3nRSsJJZQLZFER8ZuYglek/s320/Focaccia-de-mortadella-con-burrata-y-pesto.jpg", 
          [
            // Frios
            "Bresaola", 
            "Lombo piripiri", 
            "Mortadela", 
            "Pastrame", 
            "Presunto cru", 
            "Salame",
            // Queijos
            "Chancliche", 
            "Chancliche apimentado", 
            "Muçarela", 
            "Provolone", 
            "Queijo Prato",
            // Vegetais
            "Alface", 
            "Pepino", 
            "Pimentão", 
            "Rúcula", 
            "Tomate",
            // Complementos
            "Azeite", 
            "Pesto tradicional", 
            "Pesto de azeitona", 
            "Maionese", 
            "Maionese temperada", 
            "Pastinha de goronzola", 
            "Pastinha de parmesão", 
            "Pastinha de pimentão vermelho", 
            "Sardella", 
            "Alichella", 
            "Melanzane sott'olio",
            "Confit de alho",
            "Confit de alho e tomates cereja",
            "Manteiga",
            "Manteiga temperada com alho e parmesão"
          ], 
          "Base de pão artesanal. Escolha seus acompanhamentos abaixo."
        ]
      ]
    }
  ]
};