function vowelsAndConsonants(s) {
  s = s.toString();
  for (const element of s) {
    if (
      element == "a" ||
      element == "e" ||
      element == "i" ||
      element == "o" ||
      element == "u"
    ) {
      console.log(element);
    }
  }
  for (const element of s) {
    if (
      element != "a" &&
      element != "e" &&
      element != "i" &&
      element != "o" &&
      element != "u"
    ) {
      console.log(element);
    }
  }
}

const result = vowelsAndConsonants("javascriptloops");
