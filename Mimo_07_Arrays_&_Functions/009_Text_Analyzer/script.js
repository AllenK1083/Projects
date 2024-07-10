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
    let shortestWord = '';
    let longestWord = '';
    return longestWord + shortestWord;
  };
  
  function convertTextToWords(text) {
    // As JavaScript is case-sensitive., we need to ensure that all the input we receive is lowercase. 
    const lowerCaseText = text.toLowerCase();
    // write your code here.
    const words = lowerCaseText.split(" ")
    return words
  
  }