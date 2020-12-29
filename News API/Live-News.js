console.log("This our Live_news Console..");
// b8de125e0121412e85a34227d7301fbb
/* 
$ What we will do in this Project..
  ~ We will use an NEWS API.
  ~ We will send an XHR request to the API
  ~ And the data which we will get from the API.
  ~ Populate that data on the DOM..

*/

// >>>>>>>>>> DOM PART >>>>>>>>>>

// >>>>>>>>>> Fetching Data from the API >>>>>>>>>>

// --News Api Parameters..
let country = "in";
let source;
let category;
let q; // Keywords or a phrase to search for.
let apiKey = "b8de125e0121412e85a34227d7301fbb";

// -- Sending Request..
const xhr = new XMLHttpRequest();
xhr.open(
    "GET",
    `http://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`,
    true
);
xhr.onload = () => {
    if (xhr.status === 200) {
        let news_data = JSON.parse(xhr.responseText);
        // news_data is object containing information..
        let html = "";
        let published;
        news_data.articles.forEach(article => {
            published = article.publishedAt;
            let d = new Date(published);
            html += `<div class="card mb-3 w-50">
                        <img src="${
                          article.urlToImage
                        }" class="card-img-top my-1 mx-1" style="width:99%;" alt="${
        article.source.name
      }">
                        <div class="card-body">
                            <h5 class="card-title">${article.title}</h5>
                            <p class="card-text">${article.description}</p>
                            <p class="card-text"><small class="text-muted"><a href="${
                              article.url
                            }">Read More...</a></small></p>
                             <p class="card-text"><small class="text-muted">Published At-${d.getDay()}-${d.getMonth()}-${d.getFullYear()} @ ${d.getHours()}:${d.getMinutes()}</small></p>
                        </div>
                     </div>`;
        });
        document.querySelector(".news").innerHTML = html;
    } else {
        console.log("Something went wrong");
    }
};
xhr.send();