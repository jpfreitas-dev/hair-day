// Arquivo que será executado após o DOM ser carregado, ou seja, após o HTML ser processado.

import { schedulesDay} from './schedules/load.js';

document.addEventListener('DOMContentLoaded', function () {
  schedulesDay();
});