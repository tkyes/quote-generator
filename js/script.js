/******************************************
Treehouse FSJS Techdegree:
Project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat


/***
 This is the quotes array, which holds the series of quotes with source, citation, and year attributes.
***/

let quotes = [
  {
    quote: `Maybe ever’body in the whole damn world is scared of each other.` ,
    source: `John Steinbeck`,
    citation: `Of Mice and Men`,
    year: `1937`
  },
  {
    quote: `Life is to be lived, not controlled; and humanity is won by continuing to play in face of certain defeat.`,
    source: `Ralph Ellison`,
    citation: `1952`,
    year: `Invisible Man`
  },
  {
    quote: `The only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time, the ones who never yawn or say a commonplace thing, but burn, burn, burn like fabulous yellow roman candles exploding like spiders across the stars.`,
    source: `Jack Kerouac`,
    citation: `On the Road`,
    year: `1957`
  },
  {
    quote: `We were the people who were not in the papers. We lived in the blank white spaces at the edges of print. It gave us more freedom. We lived in the gaps between the stories.`,
    source: `Margaret Atwood`,
    citation: `The Handmaid's Tale`,
    year: `1985`
  },
  {
    quote: `It's much better to do good in a way that no one knows anything about it.`,
    source: `Leo Tolstoy`,
    citation: `Anna Karenina`,
    year: `1877`
  }
];

/***
 * Prints quotes to Console per Class Instructions.
 * console.log(quotes);
***/

/***
 * Gets a random number, uses that random number to return a random quote object.
***/

let randomQuote;

function getRandomQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    console.log(randomNumber);
    return randomQuote = quotes[randomNumber];
}

getRandomQuote();

/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

// document.getElementById('load-quote').addEventListener("click", printQuote, false);
