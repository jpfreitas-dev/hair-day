import dayjs from "dayjs";

const form = document.querySelector('form');
const clientName = document.getElementById('client');
const selectedDate = document.getElementById('date');

// Date atual para formatar o imput
const inputToday = dayjs(new Date()).format('YYYY-MM-DD');

// Carrega a data atual e define a adata mínima do input para a data atual
selectedDate.value = inputToday;

selectedDate.min = inputToday; // .min é um atributo do input do tipo date que define a data mínima que pode ser selecionada

form.onsubmit = (event) => {
  // Previne o comportamento padrão de recarregar a página
  event.preventDefault();
  
  try {
    // Recupera o nome do cliente
    const name = clientName.value.trim();
    

    if (!name) {
      return alert("Por favor, informe o nome do cliente");
    }

    // Recupera o horário selecionado
    const hourSelected = document.querySelector(".hour-selected");
    
    if (!hourSelected) {
      return alert("Por favor, selecione um horário");
    }

    // Recupera somente a hora
    const [hour] = hourSelected.innerText.split(":");

    // Inseriria a hora na data para criar um objeto Date completo
    const when = dayjs(selectedDate.value).add(hour, "hour");

    // Gera um ID
    const id = new Date().getTime();

    console.log({
      id, 
      name, 
      when,
    })

  } catch (error) {
    alert("Não foi possível realizar o agendamento");
    console.log(error);
    
  }
  
}