let imgSlider = document.querySelectorAll('.imgSlider');
let links = document.querySelectorAll('.about__list');
let points = document.querySelectorAll('.point');

let leftBtn = document.getElementById('leftBtn');
let rightBtn = document.getElementById('rightBtn');

let counter = 0;

const texts = [
{
    city: 'Rostov-on-Don LCD admiral',
    area: '81 m2',
    time: '3.5 months'
  },
  {
    city: 'Sochi Thieves',
    area: '105 m2',
    time: '4 months'
  },
  {
    city: 'Rostov-on-Don Patriotic',
    area: '93 m2',
    time: '3 months'
  }
]

function updateActiveImage(index) {

    imgSlider.forEach(slide => slide.classList.remove('activeImage'));
    links.forEach(link => link.classList.remove('active'));
    points.forEach(point => point.classList.remove('activeImage'));

    imgSlider[index].classList.add('activeImage');
    links[index].classList.add('active');
    points[index].classList.add('activeImage');

    changeText(index);
} 


const changeText = (index) => {
    document.querySelector('.txt__city').textContent = texts[index].city;
    document.querySelector('.txt__area').textContent = texts[index].area;
    document.querySelector('.txt__time').textContent = texts[index].time;

}


links.forEach((link, index) => {
    link.addEventListener('click', event => {
        event.preventDefault(); 
        counter = index;
        updateActiveImage(counter); 
    });
});

points.forEach((point, index) => {
    point.addEventListener('click', () => {
        counter = index; 
        updateActiveImage(counter);
    });
});

leftBtn.addEventListener('click', () => {
    counter--;
    if (counter < 0) {
        counter = imgSlider.length - 1; 
    }
    updateActiveImage(counter);
});

rightBtn.addEventListener('click', () => {
    counter++;
    if (counter >= imgSlider.length) {
        counter = 0; 
    }
    updateActiveImage(counter);
});

updateActiveImage(counter);
