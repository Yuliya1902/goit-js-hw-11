
 export function fetchImages(userInput) {
    return fetch(
        `https://pixabay.com/api/?key=42390254-a1d01e86edd47d7ed3c2f6c78&q=${userInput}&image_type=photo&orientation=horizontal&safesearch=true`
      )
        .then(response => response.json());
    }
        