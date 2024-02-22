import SimpleLightbox from "simplelightbox";


export function handleResponse(data, gallery, options, form) {
    if (data.hits.length === 0) {
      iziToast.error({
        title: '',
        backgroundColor: '#EF4040',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight'
      });
    } else {
      const markup = data.hits
        .map(data => {
          return `<li class="gallery-item"><a href="${data.webformatURL}">
          <img class="gallery-image" src="${data.webformatURL}" alt="${data.tags}"></a>
          <div class='comments'>
          <p><b>Likes: </b>${data.likes}</p>
          <p><b>Views: </b>${data.views}</p>
          <p><b>Comments: </b>${data.comments}</p>
          <p><b>Downloads: </b>${data.downloads}</p>
          </div>
          </li>`;
        })
        .join('');
      gallery.insertAdjacentHTML('afterbegin', markup);
      const lightbox = new SimpleLightbox('.gallery a', options);
      lightbox.refresh();
      form.reset();
    }
  };