// cardapio.js
const dadosIniciais = {

  // =========================
  // OPCIONAIS – PORÇÕES (100g)
  // =========================
  opcionaisGerais: [
    ["Potinho de Alichella (100g)", "20.00"],
    ["Potinho de Sardella (100g)", "20.00"],
    ["Potinho de Melanzane Sott'olio (100g)", "20.00"],
    ["Potinho de Manteiga temperada (100g)", "17.00"],
    ["Potinho de Confit de alho (100g)", "20.00"],
    ["Potinho de Confit de alho e tomates cereja (100g)", "20.00"],
    ["Potinho de Picles de cebola (100g)", "15.00"],
    ["Potinho de vidro", "5.00"]
  ],

  // =========================
  // OPCIONAIS – PANINI
  // =========================
  opcionaisPanini: [
    ["Alichella", "3.00"],
    ["Sardella", "3.00"],
    ["Melanzane sott'olio", "3.00"],
    ["Manteiga", "2.00"],
    ["Manteiga temperada com alho e parmesão", "3.00"],
    ["Confit de alho", "2.00"],
    ["Confit de alho e tomates cereja", "3.00"],
    ["Picles de cebola", "2.00"],

    ["Bresaola", "9.00"],
    ["Lombo piripiri", "9.00"],
    ["Mortadela", "5.00"],
    ["Pastrame", "9.00"],
    ["Presunto cru", "9.00"],
    ["Salame", "7.00"],

    ["Chancliche", "7.00"],
    ["Chancliche apimentado", "7.00"],
    ["Muçarela", "3.00"],
    ["Provolone", "5.00"],
    ["Queijo Prato", "5.00"],

    ["Alface", "1.00"],
    ["Pepino", "1.00"],
    ["Pimentão", "1.00"],
    ["Rúcula", "1.00"],
    ["Tomate", "1.00"],

    ["Azeite", "1.00"],
    ["Pesto tradicional (manjericão)", "2.00"],
    ["Pesto de azeitona", "2.00"],
    ["Maionese", "2.00"],
    ["Maionese temperada", "2.00"],
    ["Pastinha de goronzola", "2.00"],
    ["Pastinha de parmesão", "2.00"],
    ["Pastinha de pimentão vermelho", "2.00"]
  ],

  // =========================
  // SEÇÕES
  // =========================
  secoes: [
    {
      nome: "Antipasti",
      itens: [
        [
          "Sardella (porção de 100g)",
          "Pasta condimentada e cremosa, elaborada com aliche (sardinha pequena), pimenta e azeite de oliva. Traduz a intensidade de sabores do Mediterrâneo, perfeita para canapés.",
          "20.00",
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjQr6FhXNpHgq1UNH0_J2bSno3jBTP98sUzlCXzFAAHXXdPFD2ml002SzVE-fvX8pnZ7TXAPZ45fcbMvN6oypcIspRmQzvSvyH9On2BUgnWzrEt77mQWdDo5XSk0hsrg5OrfCEGZWB1a-7htRxs10OhXCM504N4-b1mSmK8FX5z9O4d84Y3pri-cJtqUOE/s320/IMG_20201202_174720.jpg",
          ["Potinho de vidro"]
        ],
        [
          "Alichella (porção de 100g)",
          "Conserva de aliche inteiras, curadas e acondicionadas em azeite com salsa fresca. Oferece um sabor marinho puro e distinto, ideal para antepastos.",
          "20.00",
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjB6CH6FBqAhBXaVZiqLdjRqhlXGeDsrhkxKNgpRaeZw6lVWyGJ92hhVzNU4GxLFqq_B651AwJVwi1axSj58lPa6bkByQtR8RuSBk2EkdFLmPhcb-y3V4yyt-WOXjCBvVsaRbS2IsIW_b4YglTwG9YkHncLqWdrEo7SiFdLT3f7KIq4Mfi3ayKaN_vJSp4/s320/IMG_20201202_174740.jpg",
          ["Potinho de vidro"]
        ],
        [
          "Melanzane Sottolio (porção de 100g)",
          "Berinjelas curtidas no vinagre e preservada no azeite com ervas e alho. Textura suave e paladar marcante, um acompanhamento versátil e autêntico.",
          "20.00",
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjygUAEJw4jjQR0fWMII5hc7QX1Ppu22I32LXjNTfcxf7B43coy-6gOXmdPiwCrL_NyWFuPM3HYzifiS_CuiqAD6efRxq9eYdbrr5I8C7x_jyn6I3w-OBplN5w184KYh5ZDnSF6iR6Bl6HQP5kRz8iycmQtRIfbeSR-5WvkfyQ7CFOuQKVLwwNPs5H_nj4/s4032/IMG_20201202_174658.jpg",
          ["Potinho de vidro"]
        ],
        [
          "Manteiga temperada (porção de 100g)",
          "Manteiga batida com ervas finas e alho assado. Condimento aromático e nobre que derrete sublime sobre pães e grelhados.",
          "17.00",
          "https://i0.wp.com/essareceitafunciona.com.br/wp-content/uploads/2022/08/Manteiga-temperada-Essa-Receita-Funciona-1.jpg?resize=683%2C1024&ssl=1",
          ["Potinho de vidro"]
        ],
        [
          "Picles de cebola (porção de 100g)",
          "Cebolas em conserva agridoce, que conservam uma agradável crocância. Frescor e acidez balanceados, o contraponto perfeito para pães e antepastos.",
          "17.00",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj4_qCb1HDgQQJ_28yAzCCZ1DkiP9OQNHrQA&s",
          ["Potinho de vidro"]
        ],
        [
          "Confit de alho (porção de 100g)",
          "Dentes de alho cozidos lentamente em azeite até ficarem cremosos e adocicados. Versátil para enriquecer molhos, patês ou espalhar sobre torradas.",
          "20.00",
          "https://francinha.com/novo/wp-content/uploads/2020/12/alho-confit-10.jpg",
          ["Potinho de vidro"]
        ],
        [
          "Confit de alho e tomates cereja (porção de 100g)",
          "Mistura de alho confitado e tomates cereja assados. Harmoniza doçura e acidez suave, excelente para acompanhar queijos e bruschettas.",
          "20.00",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg-1J_u_Kx2CIKSxLN1kASv_KQoogDYMioEA&s",
          ["Potinho de vidro"]
        ]
      ]
    },
    {
      nome: "Pães de fermentação natural",
      itens: [
        [
          "Pão Italiano",
          "Pão artesanal de fermentação lenta, feito com farinha de trigo italiana refinada. Casca fina e dourada, miolo alveolado e úmido, com sabor autêntico.",
          "35.00",
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgMFsu1AGezB-IwKPTAOIKWgIFGjyNAdFfGctT8EsfFLIPX0dFTpVSVuCgF2MYYpmoc1n30aJubSS1I2u6WNmueDDioKeV6yVLIC46C_vxPLxuN82nA4P5kPfHF6A2Qq67v4STkPL4a_ZrYkQCy7OmrEP4qCAjj79bm0Jst4LpKEd0VgU9pzRhgPSmvZY8/s320/IMG_20201101_192911-01.jpeg",
          [
            "Potinho de Sardella (100g)",
            "Potinho de Alichella (100g)",
            "Potinho de Melanzane Sott'olio (100g)",
            "Potinho de Manteiga temperada (100g)",
            "Potinho de Picles de cebola (100g)",
            "Potinho de Confit de alho (100g)",
            "Potinho de Confit de alho e tomates cereja (100g)",
            "Potinho de vidro"
          ]
        ],
        [
          "Pão de Campanha",
          "Pão rústico de longa fermentação, com blend de trigo italiano refinado, trigo integral orgânico e centeio integral orgânico. Casca crocante e miolo úmido e saboroso.",
          "35.00",
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiBRTRiWaC_PMwgQXyjJfzsIWy_J3hkIHunKRcZYcLdN-CYG35K1L1EswxZ_Ath9EYFbaxbD8H9H7oDPCbQKtwhD5nVusLs7K0kOJHFzz7vmBr008_0VKT-lJ7fvn3WkneNE5oX6s3AoQC17B8urlCJlSIMH-payx2WCgUdjEx_ZuKxfesnfpHxiOTWBo0/s914/1000055109.jpg",
          [
            "Potinho de Sardella (100g)",
            "Potinho de Alichella (100g)",
            "Potinho de Melanzane Sott'olio (100g)",
            "Potinho de Manteiga temperada (100g)",
            "Potinho de Picles de cebola (100g)",
            "Potinho de Confit de alho (100g)",
            "Potinho de Confit de alho e tomates cereja (100g)",
            "Potinho de vidro"
          ]
        ]
      ]
    },
    {
      nome: "Panini",
      tipoOpcional: "panini",
      itens: [
        [
          "Monte seu Panino",
          "Sanduíche feito na focaccia.",
          "5.00",
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgg1s3_8QoPb0AIrSs8NwwEG4P1-RtRaHPN1m0nnt6SDrelqKBNmFelf24iT__zBjsbIwIIiYrgPyYAIvB-0Sxwm70qshjJ52bANJ5tz57yffbvGq2ml8M7TADZfvZeMN28FsOHkqfpg0CB3rIfJU5klY1VGDDzDOz-fzu-N3nRSsJJZQLZFER8ZuYglek/s320/Focaccia-de-mortadella-con-burrata-y-pesto.jpg",
          [
            "Bresaola",
            "Lombo piripiri",
            "Mortadela",
            "Pastrame",
            "Presunto cru",
            "Salame",
            "Chancliche",
            "Chancliche apimentado",
            "Muçarela",
            "Provolone",
            "Queijo Prato",
            "Alface",
            "Pepino",
            "Pimentão",
            "Rúcula",
            "Tomate",
            "Azeite",
            "Pesto tradicional (manjericão)",
            "Pesto de azeitona",
            "Maionese",
            "Maionese temperada",
            "Pastinha de goronzola",
            "Pastinha de parmesão",
            "Pastinha de pimentão vermelho",
            "Sardella",
            "Alichella",
            "Melanzane sott'olio",
            "Manteiga",
            "Manteiga temperada com alho e parmesão",
            "Confit de alho",
            "Confit de alho e tomates cereja",
            "Picles de cebola"
          ]
        ]
      ]
    }
  ]
};