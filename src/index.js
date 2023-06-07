import './js/service/movieApiService';
import { fetchDayTrends } from './js/service/movieApiService';
import { createHomeHeroMarkup } from './js/templates/home/home-hero';

const refs = {
  homeHeroEl: document.querySelector('.js-home-hero'),
};

onHomeLoad();

async function onHomeLoad() {
  try {
    const response = await fetchDayTrends();
    console.log(response);
    const randomNumber = getRandomNumber(response.data.results.length);
    const heroFilm = response.data.results[randomNumber];
    console.log(heroFilm);
    refs.homeHeroEl.innerHTML = createHomeHeroMarkup(heroFilm);
  } catch (error) {
    console.error(error.message);
    document
      .querySelector('.js-default-home-hero')
      .classList.remove('visually-hidden');
  }
}

function getRandomNumber(arrLength) {
  return Math.round(Math.random() * (arrLength - 1));
}
