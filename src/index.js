import './js/service/movieApiService';
import {
  fetchDayTrends,
  fetchWeekTrends,
  fetchUpcomingThisMonth,
  fetchMovieById,
  fetchMovieBySearchQuery,
  fetchMovieBySearchQueryAndYear,
  fetchMovieVideosById,
  fetchGenresList,
} from './js/service/movieApiService';
import { createHomeHeroMarkup } from './js/templates/home/home-hero';

const refs = {
  homeHeroEl: document.querySelector('.js-home-hero'),
};

onHomeLoad();
// 76600 "Avatar";
async function onHomeLoad() {
  try {
    const response = await fetchWeekTrends();
    console.log(response);
    const randomNumber = getRandomNumber(response.results.length);
    const heroFilm = response.results[randomNumber];
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
