Describe: pigLatin()

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: 
pigLatin("a");
Expected Output: "away"

Test: "It will add 'way' to the end of words that only begin with a vowel"
Code:
let newArray [];
let vowels ["a", "e", "i", "o", "u"]
pigLatin("tkay");
Expected Output: ""

Test: "It will return a pig latin string if there is no vowel at the beginning."
Code: 
let newArray [];
let vowels ["a", "e", "i", "o", "u"];
pigLatin('vakay');
Expected Output:"vakay"

Test: "It will add "way" to the end of words that begin with a vowel and are uppercased."
Code:
let newArray [];
let vowels ["a", "e", "i", "o", "u"];
pigLatin("A");
expected Output: "Away"

Test: "It will find the beginning letters in two words and add "way" if the word begins with a vowel"
Code: 
let newArray[];
let vowels ["a", "e", "i", "o", "u"];
pigLa