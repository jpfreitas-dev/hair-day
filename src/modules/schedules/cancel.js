import { schedulesDay } from "./load.js";
import { scheduleCancel } from "../../services/schedule-cancel.js";
const periods = document.querySelectorAll(".period");

// Gera evento de click para cada lista de horários
periods.forEach((period) => {
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      // Obtém a li pai do elemento clicado
      const Item = event.target.closest("li");
      
      // Obtém o id do agendamento a partir do dataset do item clicado
      const { id } = Item.dataset;

      // Varifica se o usuário confirmou o cancelamento do agendamento
      if (id) {
        const isConfirm = confirm("Tem certeza que deseja cancelar este agendamento?");

        if (isConfirm) {
          // Faz a requisição para a API
          await scheduleCancel({ id }); 

          // Recarrega os agendamentos
          schedulesDay(); 

        }
      }

    }
  })
});