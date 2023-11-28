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
    /**
     * 
     * @param {string} word The player attempts to guess this word to win the game
     * @param {number} totalAttemptsCount How many times the player can guess before losing the game
     */
    constructor(word, totalAttemptsCount){
        this.word = word.toUpperCase();
        this.totalAttempts = totalAttemptsCount;
        this.attempts = 0;
        this.knownLetters = this.word.split("").map((letter) => "_");
        this.triedLetters = [];
    }

    /**
     * 
     * @param {string} letterToTest The letter to check against the winning word. It tracks if the letter has been tried already.
     * @returns -1 if the letter has been tried previously, true if the letter is new and works in the word, false if the letter does not work in the word
     */
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

    /**
     * 
     * @returns The winning word as a string, where the unknown letters are dashes
     */
    getDisplayWord(){
        return this.knownLetters.join("");
    }

    /**
     * 
     * @returns A number representing the number of guesses left before the player loses
     */
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

