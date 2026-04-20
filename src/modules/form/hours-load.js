import dayjs from "dayjs";

import { openingHours } from "../../utils/opening-hours.js";

const hours = document.getElementById("hours");

export function hoursLoad({ date }) {
  const opening = openingHours.map((hour) => {
    // Recupera somente a hora
    const [scheduleHour] = hour.split(":");

    // Adiciona a hora na date e verifica se está no passado
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs());

    // Define se o horário estpa disponível
    return ({
      hour,
      isAvailable: !isHourPast,
    });
  });

  // Renderiza as horas disponíveis
  opening.forEach(({ hour, isAvailable }) => {
    const li = document.createElement("li");
    li.classList.add("hour");
    li.classList.add(isAvailable ? "hour-available" : "hour-unavailable");

    li.textContent = hour;
    hours.appendChild(li);
  })
};
