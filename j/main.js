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
    

        async function getQuote(){
            let url = "https://api.goprogram.ai/inspiration";
            try{
                let response = await fetch(url);
                return await response.json();
            } catch(err) { console.log("Oops!", err);
                }
            }
   
        async function displayQuote(){
            let quote = await getQuote();
            let html ='';
  
  
        }
  
        function inspoQuote(index, data){
            let quoteAuother = document.getElementById("quoteAuthor");
  
            if(data[index].author == null) {
                data[index].author ="unknown";
            }
            let displayQuote = `<div class="quoteDisplay">
            <div>${data[index].quote}</div>
            <div>${data[index].author}</div>
            </div>`;
            quoteAuthor.innerHTML = displayQuote;
        }
            html += htmlSegment;
        };
  
        let container = document.querySelector('.quote');
        container.innerHTML = html;
 