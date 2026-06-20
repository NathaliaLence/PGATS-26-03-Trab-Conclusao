# Serviço de Pagamento

Projeto simples em JavaScript com testes automatizados usando Mocha. A aplicação modela um serviço de pagamento que registra transações em memória e permite consultar o último pagamento realizado.

## Estrutura

- `scr/servicoDePagamento.js`: implementação da classe `ServicoDePagamento`.
- `test/servicoDePagamento.test.js`: suíte de testes automatizados.

## Como executar os testes

Na raiz do projeto, execute:

```bash
npx mocha
```

Se preferir, também é possível configurar o script `test` no `package.json` para chamar o Mocha diretamente.

## Regras da aplicação

- Pagamentos acima de 100 recebem a categoria `cara`.
- Pagamentos com valor igual ou abaixo de 100 recebem a categoria `padrão`.
- O método `consultarUltimoPagamento()` retorna o último pagamento registrado.

## Observação

O projeto usa módulos ES, então os imports devem apontar para a pasta `scr/`.