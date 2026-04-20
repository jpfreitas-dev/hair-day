import dayjs from "dayjs";
import { apiConfig } from "./api-config";

export async function schedulesFetchByDay({ date }) {
  try {
    // Buscando os agendamentos com o métido GET (padrão do fetch)
    const response = await fetch(`${apiConfig.baseUrl}/schedules`);

    const data = await response.json();

    // Filtra os agendamentos pelo dia selecionado
    const dailySchedules = data.filter((schedule) =>
      dayjs(date).isSame(schedule.when, "day"));

    return dailySchedules;

  } catch (error) {
    console.log(error);
    alert("Não foi possível carregar os horários disponíveis para este dia");
  }
}