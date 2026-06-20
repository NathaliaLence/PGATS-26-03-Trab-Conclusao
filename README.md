# Trabalho de Conclusão — PGATS-26-03

Pipeline de integração contínua com GitHub Actions para um projeto com testes automatizados.

O projeto utilizado é o **Serviço de Pagamento**, desenvolvido em outra disciplina da pós. Trata-se de uma classe em JavaScript que registra pagamentos e consulta o último pagamento feito.

## Estrutura do projeto

- `src/servicoDePagamento.js` — código da aplicação
- `test/servicoDePagamento.test.js` — testes com Mocha
- `.github/workflows/pipeline_completa.yaml` — pipeline de CI

## Como rodar os testes localmente

```bash
npm ci
npm test
```

Para gerar o relatório (mesmo comando usado na pipeline):

```bash
npm run test:report
```

O relatório fica em `reports/mochawesome.html`.

## Pipeline

A pipeline fica no arquivo `.github/workflows/pipeline_completa.yaml`.

Ela roda nos seguintes casos:

1. **Push** — quando há commit na branch `main`
2. **Manual** — em Actions > Pipeline Completa > Run workflow
3. **Agendada** — todo sábado às 13:16 UTC (`cron: '18 13 * * 6'`)

### O que a pipeline faz

1. Baixa o código do repositório
2. Instala o Node.js e as dependências (`npm ci`)
3. Executa os testes com o reporter Mochawesome (`npm run test:report`)
4. Salva o relatório como artefato da execução (para baixar em Actions > execução > Artifacts)

## Conceitos utilizados

**Integração Contínua (CI):** prática de executar testes automaticamente sempre que o código é alterado, para detectar problemas cedo.

**GitHub Actions:** ferramenta do GitHub para criar pipelines. A configuração é feita em um arquivo YAML dentro de `.github/workflows/`.

**Workflow:** o arquivo YAML que define a pipeline. No projeto, o workflow se chama "Pipeline Completa".

**Job:** bloco de tarefas que roda em uma máquina virtual. Aqui existe um job chamado `test`.

**Steps:** passos dentro do job (checkout, instalar dependências, rodar testes, upload do relatório).

**Artefatos:** arquivos gerados durante a execução e guardados no GitHub. O relatório HTML dos testes é publicado dessa forma.

**Mochawesome:** reporter do Mocha que gera relatório em HTML com o resultado dos testes.

## Testes automatizados

Os testes validam o serviço de pagamento:

- pagamento com valor maior que 100 recebe categoria `cara`
- pagamento com valor igual ou menor que 100 recebe categoria `padrão`
- `consultarUltimoPagamento()` retorna o último pagamento da lista
