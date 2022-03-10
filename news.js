// b97dc79c30fd42deb81c26c07bc65908
let source = 'bbc-news';
let newsaccordion = document.getElementById('newsaccordian');
let apiKey = 'b97dc79c30fd42deb81c26c07bc65908';
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

xhr.getResponseHeader('content-type', 'application/json');

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        console.log(json);
        let articles = json.articles;
        console.log(articles);
        let newshtml = "";
        articles.forEach(function (element, index) {
            let news = `<div class="accordion" id="newsaccordian">

             <div style="border-style: groove"; class="accordion-item">
             
                 <h2 class="accordion-header" id="heading${index}">
                     <button style="background-color: rgb(94, 89, 89); color: aliceblue;" class="accordion-button"
                         type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true"
                         aria-controls="collapse${index}">
                         <b style="color: orange">News ${index+1} :</b>
                          ${element["title"]}
                     </button>
                 </h2>
                 <div id="collapse${index}" class="accordion-collapse collapse  aria-labelledby="heading${index}"
                     data-bs-parent="#accordionExample">
                     <div style="background-color: rgb(181, 214, 243)"; class="accordion-body">
                         ${element["description"]}.<a href="${element["url"]}" target="_blank" >Read more here</a>
                         <img style="width: 200px;" src="${element["urlToImage"]}">
                     </div>
                 </div>
             </div>
             
             </div>`;

            newshtml += news;

        });
        newsaccordion.innerHTML = newshtml;
    }
    else {
        console.log("Some error occured")
    }
}
xhr.send();
