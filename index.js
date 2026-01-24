const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

const apiURL = "https://dummyjson.com/quotes/random";

async function getQuote() {
  try {
    btnEl.innerText = "Loading...";
    btnEl.disabled = true;

    const response = await fetch(apiURL);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    quoteEl.innerText = `"${data.quote}"`;
    authorEl.innerText = `— ${data.author}`;
  } catch (error) {
    console.error("Fetch Error:", error);
    quoteEl.innerText = "Unable to load quote 😢";
    authorEl.innerText = "Please try again later";
  } finally {
    btnEl.innerText = "Get a Quote";
    btnEl.disabled = false;
  }
}

getQuote();
btnEl.addEventListener("click", getQuote);
