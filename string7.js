//Find longest word in a sentence
//"JS is very powerful language" → "powerful"

function longestWord(sentence) {
    let words = sentence.split(" ");
    console.log(words);
    
    let longest = "";

    for (let i = 0; i < words.length; i++) 
    {
        if (words[i].length > longest.length)
        {
            longest = words[i];
        }
    }

    return longest;
}

console.log(longestWord("JS is very powerful language")); // powerful

// Sentence ko words me tod diya (split)
// Ek variable rakha longest
// Har word ka length compare kiya
// Jo bada mila → store kar liya

//I split the sentence into words and tracked the word with maximum length
