function trim(string, maxLength) {
  if (string.length <= maxLength) {
    return string;
  } else {
    return string.substring(0, maxLength - 3) + "...";
  }
}

export { trim };
