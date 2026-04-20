import dayjs from "dayjs";

import { openingHours } from "../../utils/opening-hours.js";

export function hoursLoad({ date }) {
  const opening = openingHours.map((hour) => {
    // Recupera somente a hora
    const [scheduleHour] = hour.split(":");

    // Adiciona a hora na date e verifica se está no passado
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs());

    // Define se o horário estpa disponível
    return({
      hour,
      isAvailable: !isHourPast,
    });
  });
  
  console.log(opening);

}
