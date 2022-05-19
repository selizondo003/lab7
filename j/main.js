
fetch("https://api.goprogram.ai/inspiration")
.then(response =>response.json())
.then(json => console.log(json))
.catch(err =>{
    console.error('oops', err.message);
})
