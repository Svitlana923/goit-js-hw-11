 function getPhotoBySearch(searchValue) {
    const BASE_URL = 'https://pixabay.com/api/';
    const KEY = '42424645-ecd3f1048329df1dec069e6a8';
    const Query = `?key=${KEY}&q=${searchValue}`;
    const params =
        '&image_type=photo&orientation=horizontal&safesearch=true';
    const url = BASE_URL + Query + params;

    return fetch(url)
        .then(res => res.json())
        .then(data => {
        if (data.total === 0) {
            throw new Error('No images found');
        }
        return data;
        });
    }
