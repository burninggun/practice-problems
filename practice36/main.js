

var string = "four score and seven years ago";
function vowelReturn() {
    var vowels='';
    for (var i = 0; i < string.length; i++) {
        if (string[i] === 'a') {
            vowels=vowels + string[i]
        } else if (string[i] === 'e') {
            vowels=vowels + string[i]
        } else if (string[i] === 'i') {
            vowels=vowels + string[i]
        } else if (string[i] === 'o') {
            vowels=vowels + string[i]
        } else if (string[i] === 'u') {
            vowels=vowels + string[i]
        }

    }
    console.log(vowels);
    return vowels
}
vowelReturn();

