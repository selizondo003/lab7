
const inspirationalQuote = ()  => {
    fetch("https://api.goprogram.ai/inspiration")
        .then(response => {
            return response.json();
        })
        .then(response => {
            let quote = document.getElementById("quote");
            
            let htmlQuote = `<div class="quoteDisplay">
            <div>${quote}</div>
            <div>${author}</div>
            </div>`;
            quote.innerHTML = htmlQuote;
        })
        .catch(err => {
            console.log("Error", err);
        })
    }


