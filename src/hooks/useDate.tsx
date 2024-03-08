import moment from 'moment';

const useDate = () => {
  const today = new Date();

  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const day = today.getDay();

  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();
  const milliseconds = today.getMilliseconds();

  const dateValue = `${year}-${month}-${date}`;
  const timeValue = `${hours}:${minutes}:${seconds}`;
  const fullDateValue = `${dateValue} ${timeValue}`;

  const dataFormatHandler = ({ dataValue, formatValue }) =>
    dataValue && moment(dataValue).format(formatValue);

  return {
    fullDateValue,
    dateValue,
    timeValue,
    year,
    month,
    date,
    day,
    hours,
    minutes,
    seconds,
    milliseconds,
    dataFormatHandler,
  };
};
export default useDate;
