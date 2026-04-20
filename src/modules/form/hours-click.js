export function hoursClick() {
  const hours = document.querySelectorAll(".hour-available");

  hours.forEach((available) => {
    available.addEventListener("click", (selected) => {
      // Remove a classe "hour-selected" de todas as horas disponíveis
      hours.forEach((hour) => {
        hour.classList.remove("hour-selected");
      });
      // Adiciona a classe "hour-selected" à hora clicada
      selected.target.classList.add("hour-selected");
    });
  });
}