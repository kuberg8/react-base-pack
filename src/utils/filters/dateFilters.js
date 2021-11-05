import moment from "moment";

const EMPTY_STRING = "";

function isToday(date) {
  return date.isSame(moment().startOf("day"), "d");
}

function isYesterday(date) {
  return date.isSame(
    moment()
      .subtract(1, "days")
      .startOf("day"),
    "d",
  );
}

function dateFilter(date) {
  if (!date) {
    return EMPTY_STRING;
  }

  const momentDate = moment(date);

  let formattedDate = "";

  if (isToday(momentDate)) {
    formattedDate = momentDate.format("[Сегодня,] HH:mm");
  } else if (isYesterday(momentDate)) {
    formattedDate = momentDate.format("[Вчера, ] HH:mm");
  } else {
    formattedDate = momentDate.locale("ru").format("D MMMM YYYY, HH:mm");
  }

  return formattedDate;
}

function msToMin(ms) {
  const seconds = Math.floor(ms / 1000) % 60;
  const minutes = Math.floor(ms / 1000 / 60) % 60;

  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${formattedMinutes}:${formattedSeconds}`;
}

function simpleDate(date) {
  if (!date) {
    return "";
  }

  return moment(date).format("DD.MM.YYYY");
}

function days(daysCount) {
  let modulo = daysCount % 10;

  if (modulo === 1) {
    return `${daysCount} день`;
  } else if (modulo < 5 && modulo > 1) {
    return `${daysCount} дня`;
  } else {
    return `${daysCount} дней`;
  }
}

function secondsToMinutes(seconds) {
  const secs = Math.floor(seconds % 60);
  const mins = Math.floor((seconds / 60) % 60);

  const formattedSeconds = secs < 10 ? `0${secs}` : secs;
  const formattedMinutes = mins < 10 ? `0${mins}` : mins;

  return `${formattedMinutes}:${formattedSeconds}`;
}

export default { dateFilter, msToMin, simpleDate, days, secondsToMinutes };
