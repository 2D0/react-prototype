const useInputHandler = () => {
  const onlyTextHandler = inputEvent =>
    !/^[가-힣A-Za-z]+$/.test(inputEvent.target.value)
      ? (inputEvent.target.value = inputEvent.target.value.replace(
          /[^가-힣A-Za-z]/g,
          '',
        ))
      : '';

  const onlyNumberHandler = inputEvent =>
    !/^[^0-9]+$/.test(inputEvent.target.value)
      ? (inputEvent.target.value = inputEvent.target.value.replace(
          /[^0-9]/g,
          '',
        ))
      : '';

  const maxLengthHandler = inputEvent =>
    inputEvent.target.value.length > inputEvent.target.maxLength &&
    inputEvent.target.value.slice(0, inputEvent.target.maxLength);

  return { onlyTextHandler, onlyNumberHandler, maxLengthHandler };
};
export default useInputHandler;
