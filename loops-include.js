function vowelsAndConsonants(s) {
  s = s.toString();
  let vowels = ["a", "e", "i", "o", "u"];
  //vowels er modde element ase kina sheta check korate hobe.element er modde vowels kina sheta check korano zabe na cz vowels purata ekta array r element matro 1 ta so 1 tar vitore 5 ta kivhabe exists korbe.
  for (const element of s) {
    if (vowels.includes(element)) {
      console.log(element);
    }
  }
  for (const element of s) {
    if (!vowels.includes(element)) {
      console.log(element);
    }
  }
}

const result = vowelsAndConsonants("javascriptloops");
