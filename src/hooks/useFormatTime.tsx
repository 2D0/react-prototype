const useFormatTime = time => {
  const seconds = Math.floor(time / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  const displaySeconds = seconds % 60;
  const displayMinutes = minutes % 60;

  let formattedTime =
    displayMinutes.toString().padStart(2, '0') +
    ':' +
    displaySeconds.toString().padStart(2, '0');

  if (hours > 0) {
    formattedTime = hours.toString().padStart(2, '0') + ':' + formattedTime;
  }

  return { seconds, minutes, hours, formattedTime };
};

export default useFormatTime;
