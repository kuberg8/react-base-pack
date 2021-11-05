const CURRENCY_CHAR = "₽";

function currency(input) {
  const formatted = new Intl.NumberFormat("ru-RU").format(+input);

  if (typeof formatted !== "string" && isNaN(formatted)) {
    return "";
  } else {
    return `${formatted} ${CURRENCY_CHAR}`;
  }
}

function phone(input) {
  const CODE = "+7";
  const OPERATOR = input.substr(0, 3);
  const FIRST_3 = input.substr(3, 3);
  const NEXT_2 = input.substr(6, 2);
  const LAST_2 = input.substr(8, 2);

  return `${CODE} (${OPERATOR}) ${FIRST_3}-${NEXT_2}-${LAST_2}`;
}

export default { currency, phone };
