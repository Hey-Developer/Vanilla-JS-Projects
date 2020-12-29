// A script to scrawl the web PAge
// ? Select all the link from a page which contains "python" this word in their href.
let str = "python";
let links = document.links;
console.log(links);
let href;
Array.from(links).forEach(function(element) {
    href = element.href;
    if (href.includes(str)) {
        console.log(href);
    }
});