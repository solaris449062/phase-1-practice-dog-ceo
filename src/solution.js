const dogBar = document.getElementById('dog-bar');
const dogInfo = document.getElementById('dog-info');
 
fetch('http://localhost:3000/pups')
  .then((res) => res.json())
  .then(handleDogs);
 
function handleDogs(dogs) {
  dogs.forEach((dog) => {
    const dogSpan = document.createElement('span');
    dogSpan.innerText = dog.name;
    dogBar.append(dogSpan);
 
    dogSpan.addEventListener('click', () => {
      showDogInfo(dog);
    });
  });
}
 
function showDogInfo(dog) {
  dogInfo.innerHTML = `
    <img src=${dog.image}>
    <h2>${dog.name}</h2>
    <button>${dog.isGoodDog ? 'Good' : 'Bad'} Dog!</button>
  `;
 
  dogInfo.querySelector('button').addEventListener('click', () => {
    dog.isGoodDog = !dog.isGoodDog;
    showDogInfo(dog);
  });
}