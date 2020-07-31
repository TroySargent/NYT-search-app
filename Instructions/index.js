let apiKey = "Wd4pxwZ6afgbEH60WOkHZde44gsP6khq"
let queryUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&api-key=${apiKey}`

$.ajax({
    url : queryUrl,
    method : "GET",
}).then(function(response){

});