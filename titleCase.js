function titleCase(sentence, minorWords) {

    function capitaliseFirstLetterOfAWord(word) {
        const makeWordLowerCase = word.toLowerCase();
        const wordWithFirstLetterCapitalised = makeWordLowerCase.replace(makeWordLowerCase.charAt(0), makeWordLowerCase.charAt(0).toUpperCase());
        return wordWithFirstLetterCapitalised;
    }

    if (sentence == "") {
        return "";
    } else {

        const sentenceToArray = sentence.toLowerCase().split(" ")
        const newWordArray = [];

        if (minorWords == null ) {

            for (word of sentenceToArray) {
                const newWord = capitaliseFirstLetterOfAWord(word);
                newWordArray.push(newWord);
            }

        } else {

            for (word of sentenceToArray) {
                const minorWordsToArray = minorWords.toLowerCase().split(" ");
                const newWord = capitaliseFirstLetterOfAWord(word);

                if (minorWordsToArray.includes(word)) {
                    newWordArray.push(word);
                } else {
                    newWordArray.push(newWord);
                }
            }
        }
            const newString = newWordArray.join(" ");
            const result = newString.replace(newString[0], capitaliseFirstLetterOfAWord(newString[0]));
            return result;
    }
}


