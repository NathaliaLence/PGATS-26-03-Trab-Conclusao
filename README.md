# Trabalho de Conclusão — PGATS-26-03

Trabalho de integração contínua com GitHub Actions para um projeto com testes automatizados.

Usei o projeto **Serviço de Pagamento** que desenvolvi em outra disciplina da pós. É uma classe em JavaScript que registra pagamentos e consulta o último pagamento feito.

Repositório: https://github.com/NathaliaLence/PGATS-26-03-Trab-Conclusao

## Arquivos principais

- `src/servicoDePagamento.js` — aplicação
- `test/servicoDePagamento.test.js` — testes com Mocha
- `eslint.config.js` — configuração do ESLint
- `.github/workflows/pipeline_completa.yaml` — pipeline de CI

## Como rodar localmente

```bash
npm ci
npm run lint
npm test
```

Para gerar o relatório (mesmo comando usado na pipeline):

```bash
npm run test:report
```

O relatório fica em `reports/mochawesome.html`.

## Pipeline

Arquivo: `.github/workflows/pipeline_completa.yaml`  
Nome: **Pipeline Completa - Push, Manual e Agendado**

### Gatilhos

- **Push** — ao enviar commit na branch `main`
- **Manual** — Actions > Pipeline Completa - Push, Manual e Agendado > Run workflow
- **Agendada** — todo sábado às 14:15 (horário de Brasília)

```yaml
schedule:
  - cron: '15 14 * * 6'
    timezone: 'America/Sao_Paulo'
```

### Passos

1. Checkout do código
2. Instalação do Node.js 20 e dependências (`npm ci`)
3. ESLint (`npm run lint`)
4. Testes com relatório Mochawesome (`npm run test:report`)
5. Upload do artefato `relatorio-testes` (com `if: always()`, para salvar o relatório mesmo se algo falhar)

Para baixar o relatório: Actions > execução > Artifacts > `relatorio-testes`.

## Conceitos utilizados

**Integração Contínua (CI):** rodar testes e verificações automaticamente quando o código muda.

**GitHub Actions:** ferramenta do GitHub para criar pipelines em arquivos YAML (`.github/workflows/`).

**Workflow:** arquivo YAML que define a pipeline.

**Job:** bloco de tarefas que roda na máquina virtual (`test`).

**Steps:** etapas do job (checkout, instalar, lint, testes, upload).

**ESLint:** análise estática do código JavaScript antes dos testes.

**Mochawesome:** gera relatório HTML/JSON dos testes.

**Artefatos:** arquivos gerados na pipeline e armazenados no GitHub para download.

## Testes automatizados

Os testes verificam:

- valor maior que 100 → categoria `cara`
- valor igual ou menor que 100 → categoria `padrão`
- `consultarUltimoPagamento()` retorna o último pagamento

## Tecnologias

- JavaScript (ES Modules)
- Node.js
- Mocha
- ESLint
- Mochawesome
- GitHub Actions

## Entrega

- Repositório: https://github.com/NathaliaLence/PGATS-26-03-Trab-Conclusao
- Evidência: https://github.com/NathaliaLence/PGATS-26-03-Trab-Conclusao/actions (abrir uma execução com status Success)
