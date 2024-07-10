const  textAnalyzer = (text)=> {
    if (typeof text !== `string`){
      console.log(
        "Cannot analyze text. Provided input is not valid. Please pass a string."
        );
      return "An error occurred";
    }
    if (text.trim().length < 1) {
    console.log(
      "Cannot analyze text. Your text must include at least one character.");
    return "An error occurred";
  }
    const wordsArray = convertTextToWords(text);
    let longestWord = findLongestWord(wordsArray);
    let shortestWord = findShortestWord(wordsArray, longestWord); // Pass both parameters.
    console.log(`Longest Word: ${longestWord}`);
    console.log(`Shortest Word: ${shortestWord}`);
    const vowelWords  = findVowelWords(wordsArray);
    console.log(`Vowel Words: ${vowelWords}`)
    console.log(`Word list: ${wordsArray}`);
    console.log(`Total Words Count: ${wordsArray.length}`)
    return longestWord + shortestWord;
  };
  
  function convertTextToWords(text) {
    // As JavaScript is case-sensitive., we need to ensure that all the input we receive is lowercase. 
    const lowerCaseText = text.toLowerCase();
    // write your code here.
    const words = lowerCaseText.split(" ")
    return words
  
  }
  
  function findLongestWord(words) {
    let longestWord = '';
    for (let i = 0; i < words.length; i++) {
      let currentWord = words[i];
      if (currentWord.length >= longestWord.length) {
        longestWord = currentWord;
      }
    }
    return longestWord;
  }
  
  function findShortestWord(words,longestWord) {
    let shortestWord = longestWord;
    for (let i = 0; i < words.length; i++) {
      let currentWord = words[i];
      if (currentWord.length < shortestWord.length) {
        shortestWord = currentWord;
      }
    }
    return shortestWord; // Add this line.
  }
  
  function findVowelWords(words) {
    const vowels = ['a', 'i', 'e', 'o', 'u'];
    let vowelWords = [];
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      for (let j = 0; j < vowels.length; j++) {
        let vowel = vowels[j];
        if (word.startsWith(vowel)) {
          vowelWords.push(word);
        }
      }
    }
    return vowelWords;
  }
  textAnalyzer(`You are an awesome developer`);