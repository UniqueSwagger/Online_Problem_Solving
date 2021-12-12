function getDayName(dateString) {
  let dayName;
  // Write your code here
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date(dateString);
  const day = date.getDay();
  dayName = days[day];
  return dayName;
}
