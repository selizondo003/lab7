const quote = () => {
    fetch("https://api.goprogram.ai/inspiration")
        .then(response => {
            return response.json()
        })
        .then( data => {
            let a = 0;

            let next = document.getElementById("next");
            next.addEventListener('click', (e) => {
                let countN = document.getElementById("countN");
                countN.value = ++a;
                inspoQuote(countN.value,data);
            },false);
        })
        .catch((err) => console.log("Oops!", err));
    

        function inspoQuote(index, data){
            

            if(data[index].author == null) {
                data[index].author ="unknown";
            }
            let displayQuote = `<div class="quoteDisplay">
            <div>${data[index].quote}</div>
            <div>${data[index].author}</div>
            </div>`;
            quoteAuthor.innerHTML = displayQuote;
        }}