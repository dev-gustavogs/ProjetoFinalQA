#language: pt
Funcionalidade: Busca no site do gov.br
  Como usuário do portal gov.br
  Quero realizar uma busca
  Para encontrar informações sobre serviços públicos

Contexto: teste de busca no gov.br
    Dado que o usuário está na página do gov.br

    Cenário: Usuário realiza uma busca por INSS
    Quando o usuário digita INSS na barra de busca
    E o usuário confirma a busca
    Então o usuário deve ver resultados relacionados ao INSS
