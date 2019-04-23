export const formatDateTimeAMPM = timestamp => {
  const date = new Date(timestamp);
  const utcMonth = date.getUTCMonth() + 1;
  const month = utcMonth < 10 ? `0${utcMonth}` : utcMonth;
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  const ampmHours = hours % 12 ? hours % 12 : 12;
  return `${year}-${month}-${day} ${ampmHours}:${minutes} ${ampm}`;
};
