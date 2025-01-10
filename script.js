
const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quoter");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const  newQuteBtn= document.getElementById("new-quote");

let apiQuotes = [];

// Show New Quote
function newQuote() {
    // Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // Check if Author field is blank an replace with 'Unknown'
    if (!quote.author) {
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }
    // Check Quote length to determine styling
    if (quote.quote.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.quote;
}


async function getQuote() {
    const apiUlr = 'https://gist.githubusercontent.com/awran5/355643af99164a61ae0f95c84206d151/raw/c62636e8eef7e73540fa04b67f753ca9b95ee21e/quotes-api.js';
    try {
        const response = await fetch(apiUlr);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) { 
    }
}



getQuote();




