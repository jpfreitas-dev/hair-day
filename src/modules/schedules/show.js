import dayjs from "dayjs";

// Selecionar as seções manhã, tarde e noite
const periodMorning = document.getElementById("period-morning");
const periodAfternoon = document.getElementById("period-afternoon");
const periodNight = document.getElementById("period-night");

export function schedulesShow({ dailySchedules }) {
  try {
    // Limpa os horários exibidos anteriormente
    periodMorning.innerHTML = "";
    periodAfternoon.innerHTML = "";
    periodNight.innerHTML = "";

    // Renderiza os agendamentos por período
    dailySchedules.forEach((schedule) => {
      const item = document.createElement("li");
      const time = document.createElement("strong");
      const name = document.createElement("span");

      // Adiciona o id do agendamento como atributo data-id
      item.setAttribute("data-id", schedule.id);

      time.textContent = dayjs(schedule.when).format("HH:mm");
      name.textContent = schedule.name;

      // Cria o ícone de cancelamento
      const cancelIcon = document.createElement("img");
      cancelIcon.setAttribute("src", "./src/assets/cancel.svg");
      cancelIcon.setAttribute("alt", "Cancelar");
      cancelIcon.classList.add("cancel-icon");

      // Adiciona o tempo, nome e ícone ao item da lista
      item.append(time, name, cancelIcon);

      // Obtém somente a hora
      const hour = dayjs(schedule.when).hour();

      // Renderiza o agendamento na sessão correta
      if (hour <= 12) {
        periodMorning.appendChild(item);
      } else if (hour <= 18) {
        periodAfternoon.appendChild(item);
      } else {
        periodNight.appendChild(item);
      }
    });

  } catch (error) {
    alert("Não foi possível exibir os horários disponíveis para este dia");
    console.log(error);

  }
}