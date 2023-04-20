const dogImgContainer = document.querySelector('#dog-image-container');
const dogBreedList = document.querySelector('#dog-breeds');
const letterSelector = document.querySelector('#breed-dropdown');

fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(res => res.json())
  .then(data => {
    data.message.forEach(imageUrl => {
      let dogImg = document.createElement('img');
      dogImg.src = imageUrl
      dogImgContainer.append(dogImg);
    });
  });

  fetch('https://dog.ceo/api/breeds/list/all')
  .then(res => res.json())
  .then(data => {
    let allDogs = [];
    Object.keys(data.message).forEach(breed => {
      let dogBreed = document.createElement('li');
      dogBreed.textContent = breed;
      dogBreedList.append(dogBreed);
      dogBreed.addEventListener('click', () => {
        dogBreed.style.color = 'blue';
      });
      allDogs.push(breed);
      addSelectorFunctionality(allDogs);
    });
  });

  function addSelectorFunctionality(allDogs) {
    letterSelector.addEventListener('change', () => {
      let selectedLetter = letterSelector.value;
      let filteredDogs = allDogs.filter(dogBreed => dogBreed[0] === selectedLetter);

      dogBreedList.innerHTML = '';

      //if time later, I will add the 'sub-dog' breeds that are sometimes in arrays of values
      //for some dog breeds
      filteredDogs.forEach(dog => {
        let filteredDogListing = document.createElement('li');
        filteredDogListing.textContent = dog;
        dogBreedList.append(filteredDogListing);
        filteredDogListing.addEventListener('click', () => {
          filteredDogListing.style.color = 'blue';
        })
      });
    });
  }












