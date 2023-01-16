
const word = "11223211";

const isPalindrome = (word) => {
    for (let i=0; i < (word.length / 2); i++){
        if (word[i] !== word[word.length - 1 - i]){
            return false;
        }
    }
    return true;
}


if (isPalindrome(word)) {
    console.log("\n '" + word + "'" + " is a palindrome, length: " + word.length + "\n");
} else {
    console.log("\n '" + word + "'" + " is not a palindrome, length: " + word.length + "\n");
}