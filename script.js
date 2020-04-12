'use strict';

function getDogImage(inputValue) {
    fetch(`https://dog.ceo/api/breeds/image/random/${inputValue}`)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
        .catch(error => alert('Something Wrong. Try again'));
    }
function displayResults(responseJson) {
    console.log(responseJson);
    let arrayOfImg = responseJson.message;
    let display = getImages(arrayOfImg);
    $('.results-img').html(display); 
}
function getImages(arrayOfImg) {
    let valueToReturn ='';
    for(let i=0; i<arrayOfImg.length; i++){
        valueToReturn += `<img src ="${arrayOfImg[i]}" class="results-img">`;
    }
   //console.log(valueToReturn);
   return valueToReturn; 
}
function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        let inputValue = $('.quantity').val();
        getDogImage(inputValue);
    });
}

$(function () {
    console.log('App loaded! Waiting for submit!');
    watchForm();
});
