### Calculadora Simples em JavaScript

Este é um programa simples de calculadora em JavaScript que permite ao usuário realizar operações aritméticas básicas entre dois números. Abaixo segue uma descrição detalhada do funcionamento e como utilizar o código.

#### Funcionalidades

- **Operações Suportadas**: O usuário pode realizar as operações de adição (+), subtração (-), multiplicação (*), divisão (/) e cálculo de porcentagem (%).
  
- **Validação de Entrada**: O programa verifica se os números fornecidos são válidos (números reais) e se a operação digitada é válida.

- **Encerramento Controlado**: O usuário pode encerrar a calculadora a qualquer momento digitando `'s'`.

#### Pré-requisitos

- Node.js instalado para executar o código JavaScript no ambiente local.
- Biblioteca `prompt-sync` instalada para a entrada de dados no console.

#### Como Usar

1. **Clone o Repositório**:

   ```bash
   git clone https://github.com/MarianaBMoraes/Calculadora.git
   ```

2. **Instale as Dependências**:

   Certifique-se de ter instalado o `prompt-sync` utilizando:

   ```bash
   npm install prompt-sync
   ```

3. **Execute o Programa**:

   Execute o programa com o Node.js:

   ```bash
   node calculadora.js
   ```

4. **Interaja com a Calculadora**:

   - Digite o primeiro número quando solicitado.
   - Digite o segundo número quando solicitado.
   - Escolha a operação desejada digitando `+`, `-`, `*`, `/` ou `%`.
   - Visualize o resultado da operação.
   - Para encerrar o programa, digite `'s'` quando solicitado.

#### Exemplo de Uso

```plaintext
Digite o primeiro número: 10
Digite o segundo número: 5
Digite a operação desejada (+, -, *, /, %): *
O resultado da operação 10 * 5 é: 50

Digite 's' para sair ou 'c' para continuar: c
Digite o primeiro número: 20
Digite o segundo número: 0
Digite a operação desejada (+, -, *, /, %): /
Erro: Divisão por zero não é permitida.

Digite 's' para sair ou 'c' para continuar: s
Encerrando a calculadora...
```

#### Contribuição

- Contribuições são bem-vindas! Sinta-se à vontade para sugerir melhorias através de pull requests.
- Para reportar bugs ou problemas, utilize as issues do repositório.

#### Autor

- Este código foi desenvolvido por [Mariana Moraes](https://github.com/MarianaBMoraes).

#### Licença

- Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.
