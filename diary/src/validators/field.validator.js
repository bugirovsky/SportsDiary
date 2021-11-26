export function fieldValidator(str) {
  console.log("str", str);
  if (!str) {
    return {
      errorMessage: "Поле не заполнено",
      isValid: false,
    };
  }
  if (!isFirstLetterCapital(str)) {
    return {
      errorMessage: "Первая буква не заглавная",
      isValid: false,
    };
  }
  if (!isConsistOfNumbersSymbols(str)) {
    return {
      errorMessage: "В поле можно ввести только буквы или цифры",
      isValid: false,
    };
  }
  return {
    isValid: true,
    errorMessage: "",
  };
}
function isFirstLetterCapital(str) {
  return str[0] === str[0].toUpperCase();
}
function isConsistOfNumbersSymbols(str) {
  let isValid = true;
  const regex = new RegExp("[а-яА-ЯA-Za-z0-9.\\s]");
  str.split("").forEach((s) => {
    if (!regex.test(s)) {
      isValid = false;
    }
  });
  return isValid;
}
