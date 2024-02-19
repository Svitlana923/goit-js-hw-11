
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const userValue = document.querySelector('input').value;

function searchImages(userValue) {
    const BASE_URL = 'https://pixabay.com/api/'
    const key = '?key=42424645-ecd3f1048329df1dec069e6a8&'
    const q = `q=${userValue}&`
    const PARAMS = 'image_type=photo&orientation=horizontal&safesearch=true&per_page=18'
    const url = BASE_URL + key + q + PARAMS;

    return fetch(url)
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error();
            }
        })
        .then(data => {
        if (data.hits.length === 0) {
            throw new Error('No results found');
        }
        return data;
    })
        .catch(error => {
            iziToast.error({
                title: '',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight'
            });
        });
}

  const lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    });


const form = document.querySelector(".form")
const searchInput = document.querySelector("input");
const searchBtn = document.querySelector("button");
const myGallery = document.querySelector(".gallery");
 const loaderElem = document.querySelector('.loader');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    showLoader()
    myGallery.innerHTML = '';
   
    searchImages(userValue)
        .then(data => {
        renderImages(data.hits);
        })
        .catch(error => {
        renderError(error);
        })
        .finally(() => {hideLoader()
        });

})

   function renderImages(array) {
    const markup = array
        .map(
        ({
            largeImageURL,
            webformatURL,
            tags,
            likes,
            views,
            comments,
            downloads,
        }) => {
            return `
        <div class="card-container">
            <a href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}" title="${tags}" width="360" height="300" />
            <ul class="info-cards-container">
                <li class="info-cards-elements">likes<span>${likes}</span></li>
                <li class="info-cards-elements">views<span>${views}</span></li>
                <li class="info-cards-elements">comments<span>${comments}</span></li>
                <li class="info-cards-elements">downloads<span>${downloads}</span></li>
            </ul>
            </a>
        </div>
        `;
        }
        )
        .join('');

    myGallery.innerHTML = markup;
    lightbox.refresh();
}
    function renderError(error) {
    myGallery.innerHTML = '';
    iziToast.show({
        message: `❌ "${error.message}". Please try again!`,
        color: 'red',
        position: 'topRight',
        maxWidth: '400px',
    });
    }
   function showLoader() {
    loaderElem.style.display = 'block';
    }

    function hideLoader() {
    loaderElem.style.display = 'none';
    }
