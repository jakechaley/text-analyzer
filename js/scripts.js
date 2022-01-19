// Utility Logic

function noInputtedWord(word, text) {
  return ((text.trim().length === 0) || (word.trim().length === 0));
}

function uses(value) {
  return value > 1;
}

// Business Logic

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (noInputtedWord(word, text)) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

function mostUsedWords (text) {
  let wordCount = 0
  const wordArray = text.split(" ");
  let elemArray = []
  wordArray.forEach(function(element, index) {
    if (element === wordArray[index + 1]) {
      elemArray.push(element);
      }  
      wordCount++;
    });
    return elemArray + ": " + wordCount;
  }

//   .sort method
  //   .includes method
  //   if element[i] = 
  //   wordcount ++
  // } else 

  function mostUsedWords(text) { 
    text = text.toLowerCase();
    let wordArray = text.split(" ").sort();
    let wordCount = 1;
    let countArray = [];
    wordArray.forEach(function(word, index) {
      if (word === wordArray[index+1]) {
        wordCount ++;
      } else {
        countArray.push([wordCount, word]);
        wordCount = 1;
      }
    countArray.sort().reverse();
    });
    // let result = countArray.filter(wordCount => wordCount.length >= 2);
    console.log(countArray);
  };

  function offensive(text) {
    const wordsToOmit = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
    let wordArray = text.toLowerCase().split(" ");
    let newArray = [];
    wordArray.forEach(function(word) {
      if (!word.includes("zoinks")) { 
        newArray.push(word);
      }
    })
    return newArray.join(" ");
  }

  function offensive(text) {
    const wordsToOmit = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
    let wordArray = text.toLowerCase().split(" ");
    let newArray = [];
    wordArray.forEach(function(word) {
      if (!word.includes("zoinks")) { 
        newArray.push(word);
      } else if (!word.includes("muppeteer")) { 
        newArray.push(word);
      // } else if (!word.includes("biffaroni")) { 
      //   newArray.push(word);
      // } else if (!word.includes("loopdaloop")) { 
      //   newArray.push(word);
      }
    return newArray;
    })
  }

// UI Logic

function boldPassage(word, text) {
  if (noInputtedWord(word, text)) {
    return "";
  }
  let htmlString = "<p>";
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      htmlString = htmlString.concat("<b>" + element + "</b>");
    } else {
      htmlString = htmlString.concat(element);
    }
    if (index !== (textArray.length - 1)) {
      htmlString = htmlString.concat(" ");
    }
  });
  return htmlString + "</p>";
}


$(document).ready(function(){
  $("form#word-counter").submit(function(event){
    event.preventDefault();
    const passage = $("#text-passage").val();
    const word = $("#word").val();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
    $("#bolded-passage").html(boldPassage(word, passage));
  });
});