export default function getBookDays(checkIn: Date, checkOut: Date) {
  const milisseconds = checkOut.getTime() - checkIn.getTime();
  const days = milisseconds / 3600000 / 24; // 3600000 to convert milliseconds to hours and 24 to days
  return days;
}
