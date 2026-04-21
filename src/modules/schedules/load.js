import { schedulesFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { schedulesShow } from "../schedules/show.js";
import { hoursLoad } from "../form/hours-load.js";

const selectedDate = document.querySelector("#date");

export  async function schedulesDay() {
  // Obtém a data do input
  const date = selectedDate.value;

  // Buscar os agendamentos do dia selecionado
  const dailySchedules = await schedulesFetchByDay({ date });

  // Exibe os agendamentos do dia
  schedulesShow({ dailySchedules });

  // Renderiza as horas disponíveis
  hoursLoad({ date , dailySchedules }); 
}