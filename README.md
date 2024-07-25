# Projeto de Cálculo de IMC com Recomendações Personalizadas

Este projeto é uma aplicação web que calcula o Índice de Massa Corporal (IMC) do usuário e fornece recomendações personalizadas com base nos resultados. A aplicação também utiliza Inteligência Artificial para gerar sugestões e mensagens humorísticas de acordo com o IMC do usuário.

## Funcionalidades

### Cálculo de IMC

- **Entrada de Dados:** Permite ao usuário inserir seu peso e altura.
- **Validação de Dados:** Verifica se os valores inseridos são válidos (não nulos, positivos e diferentes de zero).
- **Cálculo e Exibição:** Calcula o IMC com base nos valores fornecidos e exibe a classificação (abaixo do peso, peso normal, sobrepeso, obesidade).

### Recomendações Personalizadas

- **Consultas Baseadas em IMC:** Usa a IA do Google para gerar recomendações sobre como ganhar massa muscular ou emagrecer, dependendo do IMC do usuário.
- **Mensagens Humorísticas:** Fornece mensagens adicionais engraçadas para tornar a experiência mais leve e divertida.

### Tema Escuro

- **Alternância de Tema:** Permite alternar entre o tema claro e escuro com um ícone de lua.
- **Armazenamento de Preferências:** Salva a preferência de tema do usuário no `localStorage`.

## Como Usar

### Configuração

1. **Clone o Repositório:**

    ```bash
    git clone https://github.com/DaniloBronze/projeto-imc.git
    cd seu-repositorio
    ```
    
### Passos para Usar

1. **Preencha o Formulário:**
    - Insira seu peso (em kg) e altura (em metros) nos campos apropriados.
    - Aceite os termos e selecione a lista de afazeres se necessário.

2. **Submeta o Formulário:**
    - Clique no botão de submissão para calcular seu IMC.

3. **Visualize o Resultado:**
    - O resultado do IMC será exibido, incluindo uma classificação e recomendações personalizadas baseadas no seu IMC.
    - Mensagens humorísticas adicionais serão mostradas para tornar a experiência mais agradável.

4. **Consulte as Recomendações:**
    - A aplicação usará uma API para fornecer recomendações específicas sobre como ganhar massa muscular ou emagrecer, conforme o seu IMC.

## Dependências

- **Bootstrap 5:** Para o design e estilo da aplicação.
- **Marked.js:** Para converter o Markdown em HTML.
- **Highlight.js:** Para destacar a sintaxe do código.

## Contribuição

Se você quiser contribuir para o projeto, siga os seguintes passos:

1. **Faça um Fork do Repositório:**

    ```bash
    git fork https://github.com/DaniloBronze/projeto-imc.git
    ```

2. **Crie uma Branch:**

    ```bash
    git checkout -b minha-nova-funcionalidade
    ```

3. **Adicione e Comite Suas Alterações:**

    ```bash
    git add .
    git commit -m "Adiciona minha nova funcionalidade"
    ```

4. **Envia para o Repositório:**

    ```bash
    git push origin minha-nova-funcionalidade
    ```

5. **Abra um Pull Request:** 

    Abra um pull request no GitHub para revisar e integrar suas alterações.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
