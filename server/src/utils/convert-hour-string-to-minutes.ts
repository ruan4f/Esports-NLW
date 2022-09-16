/**
 * Função para converter a hora no formato string para minutos
 * @param hourString Hora no formato de string
 */
export function convertHourStringToMinutes(hourString: string){
  const [hours, minutes] = hourString.split(':').map(Number);
  const minutesAmount = (hours * 60) + minutes;

  return minutesAmount;
}