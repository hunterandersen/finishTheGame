const hangmanWords = [
    "abracadabra",
    "billboard",
    "caterwampus",
    "dredges",
    "egress",
    "financial",
    "ghouls",
    "hamburger",
    "iterate",
    "jingling",
    "kangaroo",
    "lightweight",
    "meritocracy",
    "nostrils",
    "operatic",
    "periscope"
];

class HangManWord {
    constructor(word, totalAttemptsCount){
        this.word = word.toUpperCase();
        this.totalAttempts = totalAttemptsCount;
        this.attempts = 0;
        this.knownLetters = this.word.split("").map((letter) => "_");
        this.triedLetters = [];
    }

    testLetter(letterToTest){
        const letter = letterToTest.toUpperCase();
        if (this.triedLetters.includes(letter)) return -1;
        this.triedLetters.push(letter);
        if (this.word.includes(letter)) {
            this.knownLetters = this.knownLetters.map((knownLetter, i) => {
                if (knownLetter != "_") return knownLetter;
                else if (this.word[i] == letter) return letter;
                else return "_";
            });
            return true;
        }
        return false;
    }

    getDisplayWord(){
        return this.knownLetters.join("");
    }

    getRemainingAttempts(){
        return this.totalAttempts - this.attempts;
    }
}

const hangmanTest = new HangManWord(hangmanWords[3], 10);
console.log(hangmanTest.word);
console.log(hangmanTest.getDisplayWord());
console.log(hangmanTest.testLetter("d"));
hangmanTest.testLetter("E");
console.log(hangmanTest.getDisplayWord());

