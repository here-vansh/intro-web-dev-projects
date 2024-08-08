// const sliderContainer = document.querySelector('.slider-container')
// const slideRight = document.querySelector('.right-slide')
// const slideLeft = document.querySelector('.left-slide')
// const upButton = document.querySelector('.up-button')
// const downButton = document.querySelector('.down-button')
// const slidesLength = slideRight.querySelectorAll('div').length


// let activeSlideIndex = 0

// slideLeft.style.top = `-${(slidesLength-1)*100}vh`
// upButton.addEventListener('click',()=>changeSlide('up'))
// downButtonButton.addEventListener('click',()=>changeSlide('down'))

// const changeSlide = (direction)=>{
//     const sliderHeight = sliderContainer.clientHeight
//     if(direction === 'up'){
//         activeSlideIndex++
//         if(activeSlideIndex > slidesLength - 1){
//             activeSlideIndex = 0
//         }
//     }
     
//     slideRight.style.transform = `translateY(-${activeSlideIndex*sliderHeight}px)`
// }

// Select the elements
const sliderContainer = document.querySelector('.slider-container');
const leftSlide = document.querySelector('.left-slide');
const rightSlide = document.querySelector('.right-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');

// Get the number of slides
const slidesLength = rightSlide.querySelectorAll('div').length;

// Initialize the active slide index
let activeSlideIndex = 0;

// Position the left slide to show the last slide initially
leftSlide.style.top = `-${(slidesLength - 1) * 100}vh`;

// Add event listeners for the buttons
upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

// Function to change slides
function changeSlide(direction) {
    // Update the active slide index based on the direction
    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0;
        }
    } else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1;
        }
    }

    // Calculate the new translateY values for both slides
    const sliderHeight = sliderContainer.clientHeight;
    rightSlide.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    leftSlide.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
}
