let apiKey = "Wd4pxwZ6afgbEH60WOkHZde44gsP6khq";
let searchTerm = "dog";
let beginYear = "20190101";
let endYear = "20201231";
let page = 1;
let numResults = 15;

$("#searchBtn").on("click", function (){
    // searchTerm = $("#searchTerm").val();
    let queryUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&
    begin_date=${beginYear}&end_date=${endYear}&page=${page}&api-key=${apiKey}`;

    $.ajax({
        url: queryUrl,
        method: "GET",
    }).then(function (response) {
        console.log(response.response.docs);
        let articleArray = response.response.docs;
        for (let i = 0; i < numResults; i++) {
            const element = articleArray[i];
            $(`<div class="card my-2">
                    <div class="card-body">
                        <h4 class="card-title">${element.headline.main}</h4>
                        <h5 class="card-text">${element.byline.original}</h5>
                        <p class="card-text">"${element.abstract}"</p>
                        <p class="card-text">Published: ${element.pub_date}</p>
                        <a href=${element.web_url} class="btn btn-primary">Read this article</a>
                    </div>
                </div>`).appendTo("#topArticles")
            
        };
            
        });

});