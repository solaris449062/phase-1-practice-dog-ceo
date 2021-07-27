const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all' 
const configurationObject = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
}

function fetchImages(imgUrl) {
    fetch(imgUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        const imgFilesFetched = data.message;
        console.log(imgFilesFetched)
        const imageContainerDiv = document.querySelector("div#dog-image-container");
        for(const img of imgFilesFetched) {
            console.log(img)
            const imgNode = document.createElement("img")
            imgNode.setAttribute("src", img)
            imageContainerDiv.appendChild(imgNode)
        }
    })
}

function fetchBreeds(breedUrl) {
    fetch(breedUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        const breedNamesObject = data.message;
        const breedNamesFetched = Object.keys(breedNamesObject)
        // console.log(breedNamesFetched)
        const breedList = document.querySelector("ul#dog-breeds");
        for(let i = 0; i < breedNamesFetched.length; i++) {
            // console.log(breed)
            const breedListItem = document.createElement("li")
            breedListItem.textContent = breedNamesFetched[i];
            // breedListItem.addEventListener("click", colorChange(breedList));
            breedList.appendChild(breedListItem);
        }
    })
}

// function colorChange(item) {
//     const item = document.getElement

// }


fetchImages(imgUrl);
fetchBreeds(breedUrl);



// fetch(imgUrl)
//     .then(response => response.json())
//     .then(json => console.log(json))
