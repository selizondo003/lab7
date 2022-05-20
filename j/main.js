
const inspirationalQuote = ()  => {
    fetch("https://api.quotable.io/random")
        .then(response => {
            return response.json();
        })
        .then(response => {
            document.getElementById("quote").innerHTML = response.content; 
            document.getElementById("author").innerHTML = "- " + response.author;
        })
      .catch(function(err) {
            console.log("Error", err);
        });
    }
    inspirationalQuote();



const randomImg =() =>{
    fetch("https://random.dog/woof.json")
        .then(data => {
            return data.json();
        })
        .then(data => {
            const imgElement = document.getElementById("imgElement")
            imgElement.src=data.url;
        })
        .catch(function(err) {
            console.log("Error", err);
        });
};
randomImg();