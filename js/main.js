const elUrlShortenerFomr = document.querySelector('.js-url-shortener__form');
const elUrlShortenerRes = document.querySelector('.url-shortener__results');


if (elUrlShortenerFomr) {
    elUrlShortenerFomr.addEventListener("submit", function(evt) {
        evt.preventDefault();
        elUrlShortenerRes.classList.add("url-shortener__results--opener");
    })
}

const elUrlShortener = document.querySelector('.url-shortener');
const elCopyUrlShortLinkButton = document.querySelector('.js-copy-short-link-button');
const urlShortLink  = document.querySelector(".url-shortener__short-link");

if (elUrlShortener) {
    elUrlShortener.addEventListener("click", function (evt) {
        if (evt.target.matches(".js-copy-short-link-button")) {
            // Change button test
            evt.target.textContent = "Copied";

            // Change color
            evt.target.classList.add("url-shortener__copy-button--copied");

            // Copy short link to clipboard
            navigator.clipboard.writeText(evt.target.previousElementSibling.textContent);

            // Reset btn text and class after one second
            setTimeout(function () {
                evt.target.textContent = "Copy";
                evt.target.classList.remove("url-shortener__copy-button--copied");
            }, 2000);
        }
    })
}
