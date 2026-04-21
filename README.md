# Hair Day

Aplicação web para agendamento de atendimentos de um salão de cabelo. O projeto permite escolher uma data, visualizar os horários disponíveis do dia, criar um agendamento com o nome do cliente e cancelar atendimentos já cadastrados.

O frontend foi construído com JavaScript puro, Webpack e Babel. Os dados ficam em uma API local com `json-server`, o que facilita o desenvolvimento sem depender de um backend real.

## Estrutura do Projeto

```text
index.html
package.json
server.json
webpack.config.js
src/
  main.js
  assets/
  libs/
    dayjs.js
  modules/
    page-load.js
    form/
      date-change.js
      hours-click.js
      hours-load.js
      submit.js
    schedules/
      cancel.js
      load.js
      show.js
  services/
    api-config.js
    schedule-cancel.js
    schedule-fetch-by-day.js
    schedule-new.js
  styles/
    form.css
    global.css
    schedule.css
  utils/
    opening-hours.js
```

## Funcionalidades

- Seleção de data para visualizar os agendamentos do dia.
- Carregamento automático dos horários disponíveis conforme a data escolhida.
- Exibição dos horários por período: manhã, tarde e noite.
- Bloqueio de horários já ocupados.
- Bloqueio de horários que já passaram no dia selecionado.
- Criação de novos agendamentos com nome do cliente e horário escolhido.
- Cancelamento de agendamentos existentes.
- Persistência dos dados em uma API local via `json-server`.

## Como Rodar

1. Instale as dependências:

```bash
npm install
```

2. Inicie a API local em um terminal:

```bash
npm run server
```

3. Em outro terminal, inicie a aplicação:

```bash
npm run dev
```

4. Abra o navegador em `http://localhost:3000` se ele não abrir automaticamente.

## Build

Para gerar a versão de produção:

```bash
npm run build
```

## Tecnologias

- HTML
- CSS
- JavaScript
- Webpack
- Babel
- Day.js
- json-server
