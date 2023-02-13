export default function getBookDays(checkIn: Date, checkOut: Date): number {
  const milisseconds = checkOut.getTime() - checkIn.getTime();
  const days = milisseconds / 3600000 / 24; // 3600000 to convert milliseconds to hours and 24 to days
  if (days % 1 == 0) {
    return days;
  }
  return Number(days.toFixed(0));
}
