const elUrlShortenerFomr = document.querySelector('.js-url-shortener__form');
const elUrlShortenerRes = document.querySelector('.url-shortener__results');

elUrlShortenerFomr.addEventListener("submit", function(evt) {
    evt.preventDefault();
    elUrlShortenerRes.classList.add("url-shortener__results--opener");
})