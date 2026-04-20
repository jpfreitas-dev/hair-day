import dayjs from "dayjs";

const form = document.querySelector('form');
const selectedDate = document.getElementById('date');

// Date atual para formatar o imput
const inputToday = dayjs(new Date()).format('YYYY-MM-DD');

// Carrega a data atual e define a adata mínima do input para a data atual
selectedDate.value = inputToday;

selectedDate.min = inputToday; // .min é um atributo do input do tipo date que define a data mínima que pode ser selecionada

form.onsubmit = (event) => {
  // Previne o comportamento padrão de recarregar a página
  event.preventDefault();
  console.log("Enviado");
  
}