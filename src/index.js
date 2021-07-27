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


let breedNamesFetched;
let breedList = document.querySelector("ul#dog-breeds");

function fetchBreeds(breedUrl) {
    fetch(breedUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        const breedNamesObject = data.message;
        breedNamesFetched = Object.keys(breedNamesObject)
        // console.log(breedNamesFetched)
        breedList = document.querySelector("ul#dog-breeds");
        for(let i = 0; i < breedNamesFetched.length; i++) {
            // console.log(breed)
            const breedListItem = document.createElement("li")
            breedListItem.textContent = breedNamesFetched[i];
            breedList.appendChild(breedListItem);
        }
        // breedList.childNodes[1].style.color = "magenta"
        for(let i = 1; i <= breedNamesFetched.length; i++) {
            breedList.childNodes[i].addEventListener("click", function() {
                breedList.childNodes[i].style.color = "magenta"});
        }
    })
}

// document.querySelector("select#breed-dropdown").value.onchange = update();
console.log(document.querySelector("select#breed-dropdown"))
// console.log(letterFromDropDown);
// implement filter using the letter selected
function filterStartingLetter() {
    return breedNamesFetched.filter(breedNames => breedNames.startsWith(letterFromDropDown));
    // console.log(breedNamesFetched.filter(breedNames => breedNames.startsWith(letterFromDropDown)))

    // erase all dog names under "ul#dog-breeds"
    // append as child all dog names filtered previously
}

let letterFromDropDown;
function update() {
    letterFromDropDown = document.querySelector("select#breed-dropdown").value;
    // console.log(letterFromDropDown)
    let newArray = filterStartingLetter(letterFromDropDown);
    console.log(newArray)
    let oldParentNode = document.querySelector("ul#dog-breeds")
    removeAllChildNodes(oldParentNode);
    breedList = document.querySelector("ul#dog-breeds");
    for(let i = 0; i < newArray.length; i++) {
        // console.log(breed)
        const breedListItem = document.createElement("li")
        breedListItem.textContent = newArray[i];
        breedList.appendChild(breedListItem);
    }    
}

function removeAllChildNodes(parentNode) {
    while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.firstChild);
    }
}

fetchImages(imgUrl);
fetchBreeds(breedUrl);
// breedSelector()