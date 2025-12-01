#language: pt
Funcionalidade: Pesquisar no gov.br
                Permitir que o usuário realize pesquisas no site gov.br

Contexto: teste de funcionalidade de pesquisa no gov.br
    Dado que o usuário está na página do gov.br

    Cenário: Usuário realiza uma pesquisa por palavra chave
    Quando o usuário pesquisa o termo "serviços públicos"
    Então os resultados da pesquisa relacionados a "serviços públicos" devem ser exibidos

    Cenário: Usuário realiza uma pesquisa por termo específico
    Quando o usuário pesquisa o termo "CPF"
    Então os resultados da pesquisa relacionados a "CPF" devem ser exibidos
    
    Cenário: Usuário realiza uma pesquisa por frase completa
    Quando o usuário pesquisa o termo "Como emitir um certificado digital"
    Então os resultados da pesquisa relacionados a "Como emitir um certificado digital" devem ser exibidos

    Cenário: Usuário realiza uma pesquisa por número de documento
    Quando o usuário pesquisa o termo "12345678900"
    Então os resultados da pesquisa relacionados a "12345678900" devem ser exibidos

    Cenário: Usuário realiza uma pesquisa por nome de serviço
    Quando o usuário pesquisa o termo "Agendamento de passaporte"
    Então os resultados da pesquisa relacionados a "Agendamento de passaporte" devem ser exibidos

