# API Chaves e Chapolin

Esta API fornece informações sobre os episódios, personagens, frases e elenco dos programas Chaves e Chapolin.

Confira o artigo completo em: [Construindo APIs Poderosas Com Next.Js E TypeScript: Um Passo A Passo Inspirado Em Chaves E Chapolin](https://escoladaprogramacao.com.br/construindo-apis-poderosas-com-next-js-e-typescript-um-passo-a-passo-inspirado-em-chaves-e-chapolin/)

## Sumário

- [Tecnologias Usadas](#tecnologias-usadas)
- [Instalação](#instalação)
- [Uso](#uso)
- [Endpoints Disponíveis](#endpoints-disponíveis)
- [Contribuições](#contribuições)
- [Roadmap e Melhorias Futuras](#roadmap-e-melhorias-futuras)
- [Disclaimer](#disclaimer)
- [Licença](#licença)

## Tecnologias Usadas

- [Next.js](https://nextjs.org/) - O framework de servidor e roteamento.
- [TypeScript](https://www.typescriptlang.org/) - Linguagem de programação usada.
- [lowdb](https://github.com/typicode/lowdb) - Para a simulação de um banco de dados JSON.

## Instalação

Instruções para instalar e configurar o projeto localmente.

```bash
# Clone o repositório
git clone https://exemplo.com/repositorio.git

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev
```

## Endpoints Disponíveis

### Shows

- `GET /api/shows` - Retorna uma lista de todos os programas.
- `GET /api/shows/{id}` - Retorna detalhes de um programa específico.

### Episódios

- `GET /api/shows/{showId}/episodes` - Retorna todos os episódios para um programa específico.
- `GET /api/shows/{showId}/episodes/{id}` - Retorna detalhes de um episódio específico de um programa.

### Personagens

- `GET /api/shows/{showId}/characters` - Retorna todos os personagens de um programa específico.
- `GET /api/shows/{showId}/characters/{id}` - Retorna detalhes de um personagem específico de um programa.

### Frases

- `GET /api/shows/{showId}/quotes` - Retorna todas as frases de um programa específico.
- `GET /api/shows/{showId}/quotes/{id}` - Retorna detalhes de uma frase específica de um programa.

### Elenco

- `GET /api/shows/{showId}/cast` - Retorna todo o elenco de um programa específico.
- `GET /api/shows/{showId}/cast/{id}` - Retorna detalhes de um membro do elenco específico de um programa.

## Uso

Para utilizar esta API, faça requisições HTTP GET para os endpoints listados acima.

### Importando as Rotas para o Insomnia

1. Baixe e instale o Insomnia se ainda não o tiver feito.
2. Baixe o arquivo `api.json` do diretório `/insomnia` no repositório.
3. Abra o Insomnia e vá até `Application > Preferences > Data > Import Data`.
4. Selecione `From File` e navegue até o arquivo `api.json` que você baixou.
5. Confirme a importação para adicionar as rotas da API ao seu Insomnia.

Agora você pode enviar requisições para todos os endpoints disponíveis diretamente do Insomnia, facilitando o teste e a exploração da API.

### Exemplo de requisição

Exemplo de requisição para obter todos os personagens do show com ID 1:

GET /api/shows/1/characters


Exemplo de resposta:

```json
[
  {
    "id": 1,
    "showId": 1,
    "name": "Chaves",
    "description": "Um garoto órfão e ingênuo que vive em um barril."
  },
  {
    "id": 2,
    "showId": 1,
    "name": "Seu Madruga",
    "description": "Desempregado e pai da Chiquinha."
  }
  // ... mais personagens ...
]
```

Para detalhes de como instalar e executar o projeto, bem como informações adicionais sobre contribuições e licenças, consulte as seções abaixo.

Certifique-se de substituir `{showId}` e `{id}` pelos valores correspondentes ao fazer uma requisição.

### Dicas Adicionais:

- Inclua instruções de instalação e configuração, caso haja necessidade de etapas específicas para iniciar o projeto.
- Se a sua API for pública, considere adicionar informações sobre rate limiting, autenticação (se aplicável) e como entrar em contato para obter uma chave de API.
- Inclua informações sobre como contribuir para o projeto, se for um projeto de código aberto.
- Não se esqueça de adicionar uma seção de licença para informar aos usuários como eles podem usar o seu projeto.

## Contribuições

Contribuições são sempre bem-vindas! Se você gostaria de contribuir com este projeto, por favor, siga os seguintes passos:

1. **Fork** o repositório no GitHub.
2. **Clone** o projeto para sua própria máquina.
3. **Crie uma branch** onde você fará suas mudanças.
4. **Faça suas alterações** e faça commit delas com mensagens de commit explicativas.
5. **Envie** suas mudanças para o branch.
6. **Envie um pull request** para que possamos revisar suas alterações e mesclar ao branch principal.

### Antes de enviar um Pull Request, por favor, certifique-se de:

- Seguir o estilo de código padrão do projeto.
- Incluir testes unitários ou de integração para quaisquer novas funcionalidades ou correções de bugs.
- Atualizar a documentação conforme necessário.
- Verificar se todos os testes existentes ainda estão passando.

Agradecemos antecipadamente pela sua contribuição, e esperamos melhorar este projeto com a sua ajuda!

## Roadmap e Melhorias Futuras

O desenvolvimento desta API é contínuo e várias melhorias estão planejadas para o futuro. Aqui estão algumas das melhorias e recursos que estamos considerando:

### Em Desenvolvimento

- **Sorting, Pagination e Filtering**: Implementação pendente das funcionalidades de ordenação, paginação e filtragem para permitir aos usuários uma manipulação mais eficaz e personalizada dos dados.

### Melhorias Planejadas

- **Tratamento Padronizado de Erros**: Desenvolvimento de um sistema de tratamento de erros padronizado usando middleware no Next.js, para fornecer respostas de erro consistentes e informativas em toda a API.
- **Rate Limiting**:
  - Adicionar o sistema de rate limiting.
  - Aprimorar o sistema de rate limiting para suportar diferentes limites baseados em autenticação de usuário e padrões de uso.
- **Autenticação e Autorização**: Implementar mecanismos de autenticação e autorização para proteger a API e permitir o acesso baseado em usuários.

### Recursos Futuros

### Correções de Bugs

### Contribua para o Roadmap

Se você tem ideias ou sugestões para novas funcionalidades ou melhorias, por favor, crie uma issue no repositório do GitHub ou contribua diretamente com um pull request. Todas as contribuições são bem-vindas!



## Disclaimer

Este projeto é apenas para fins didáticos e não deve ser usado comercialmente. "Chaves", "Chapolin" e todos os personagens relacionados são marcas registradas pertencentes aos seus respectivos proprietários. A criação desta API não tem a intenção de infringir quaisquer direitos de propriedade intelectual e é feita por fãs para fãs sob a política de uso justo.

## Licença

Este projeto está licenciado sob a Licença MIT.

Resumo da Licença MIT:

Você pode usar, copiar, modificar, mesclar, publicar, distribuir, sublicenciar e/ou vender cópias do software. O software é fornecido "COMO ESTÁ", sem garantia de qualquer tipo. Para mais informações, leia a licença completa.

Lembrando que, enquanto esta licença permite o uso técnico e a modificação do código-fonte, os termos do uso justo e os direitos de propriedade intelectual relacionados ao conteúdo de "Chaves" e "Chapolin" não são cobertos pela licença MIT e permanecem com seus respectivos proprietários.