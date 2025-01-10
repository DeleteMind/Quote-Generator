
const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quoter");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const  newQuteBtn= document.getElementById("new-quote");

function newQuote() {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
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