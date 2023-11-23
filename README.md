# Projeto Carrinho de Compras 

Bem-vindo ao Carrinho de Compras! 🛒 Neste projeto desenvolvido durante o módulo de Front-end do curso que fiz na Trybe, desenvolvi um carrinho de compras totalmente dinâmico, consumindo dados diretamente da API do Mercado Livre. Além disso, tive a oportunidade de aplicar o desenvolvimento orientado a testes (TDD) para garantir a qualidade do código. 

### Implementações

1. **Desenvolvimento Orientado a Testes (TDD)**
   - Foram desenvolvidos testes garantindo 100% de cobertura das funções e linhas do arquivo `fetchFunctions`.

2. **Implementação da função `fetchProductsList`**
   - A função fetchProductsList é responsável por realizar a requisição e retornar os resultados da API.
   - A função deve obrigatoriamente receber um parâmetro com o termo que será usado na busca, caso contrario retorna um erro com a mensagem: 'Termo de busca não informado'.
   - A função fetchProductsList retorna o array de produtos da API.

3. **Listagem de Produtos**
   - Implementação da função `fetchProductsList` para criar uma listagem dinâmica de produtos através da API do Mercado Livre.

4. **Texto de Carregando durante Requisição à API**
   - Foi adicionado um elemento com o texto "Carregando..." durante a requisição à API para melhor experiência do usuário.

5. **Mensagem de Erro em Caso de Falha na Requisição à API**
   - É exibida uma mensagem de erro, "Algum erro ocorreu. Recarregue a página e tente novamente", caso ocorra algum problema durante a requisição à API.

6. **Implementação da Função `fetchProduct`**
   - Foi implementada a função `fetchProduct` que retorna dados de um produto e o adiciona ao carrinho.

7. **Adição de Produtos ao Carrinho**
   - Foi implementada a funcionalidade que permite adicionar produtos ao carrinho de compras.
    
8. **Carregamento do Carrinho de Compras ao Iniciar a Página**
   - São recuperados os itens adicionados no carrinho de compras do `localStorage` e exibidos ao iniciar a página.

9.  **Cálculo do Valor Total dos Itens do Carrinho**
    - É exibido o valor total dos produtos no carrinho em um elemento identificado pela classe `total-price`.

10.**Requisição à API de CEPs e Exibição do Endereço**
    - Foi realizada uma requisição à API de CEPs e exibido o endereço completo em um elemento `span`.

# Como Executar o Projeto

Para iniciar e executar o projeto, utilize o seguinte comando:

```bash
npm start
```

Este comando utilizará o Vite para iniciar a aplicação e abrirá automaticamente no seu navegador padrão. Certifique-se de que todas as dependências estejam instaladas antes de executar este comando. Se necessário, você pode instalá-las usando:

```bash
npm install
```

Além disso, você pode aproveitar outros scripts úteis definidos no arquivo `package.json`:

- **Modo de Desenvolvimento:**
  ```bash
  npm run dev
  ```
  Este comando inicia o Vite no modo de desenvolvimento com recarregamento automático.

- **Executar Testes:**
  ```bash
  npm test
  ```
  Este comando executa os testes automaticamente. Você também pode usar o seguinte comando para acompanhar a cobertura de testes:
  ```bash
  npm run test:coverage
  ```


