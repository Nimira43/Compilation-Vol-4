const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

function newQuote() {
    const quote = formula1Quotes[Math.floor(Math.random() * formula1Quotes.length)];
    authorText.textContent = quote.author;
    quoteText.textContent = quote.text;
}
newQuote();