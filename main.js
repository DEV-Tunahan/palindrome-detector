
const word = "11223211";

const isPalindrome = (word) => {
    for (let i=0; i <= (word.length / 2); i++){

        if (word[i] !== word[word.length - 1 - i]){
            return false;
        }
        return true;
    }
}


if (isPalindrome(word)) {
    console.log("'" + word + "'" + " is a palindrome");
} else {
    console.log("'" + word + "'" + " is not a palindrome")
}