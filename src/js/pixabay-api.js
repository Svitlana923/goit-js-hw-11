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

