
const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quoter");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const  newQuteBtn= document.getElementById("new-quote");
const threadsBtn = document.getElementById('threads')
const loader = document.getElementById('loader')

let apiQuotes = [];

// Show Loading

function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Hide Loading
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

// Show New Quote
function newQuote() {
    loading();
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
    complete();
}


async function getQuote() {
    loading();
    const apiUlr = 'https://gist.githubusercontent.com/awran5/355643af99164a61ae0f95c84206d151/raw/c62636e8eef7e73540fa04b67f753ca9b95ee21e/quotes-api.js';
    try {
        const response = await fetch(apiUlr);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) { 

    }
}

// Tweet Quote
function tweetQuote() {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(tweetUrl, '_blank');
}

// Intsagram post!
function threadsQuote() {
    const faceUrl = `https://www.threads.net/intent/post?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(faceUrl, '_blank')
}

//
twitterBtn.addEventListener('click', tweetQuote);
newQuteBtn.addEventListener('click', newQuote);
threadsBtn.addEventListener('click', threadsQuote)

getQuote();
