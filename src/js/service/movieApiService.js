import axios from 'axios';

const API_KEY = '345007f9ab440e5b86cef51be6397df1';
const BASE_URL = 'https://api.themoviedb.org/3';
const TRENDING_DAY_ENDPOINT = '/trending/movie/day';
const TRENDING_WEEK_ENDPOINT = '/trending/movie/week';
const UPCOMING_ENDPOINT = '/trending/movie/upcoming';

async function fetchDayTrends() {
  return axios.get(`${BASE_URL}${TRENDING_DAY_ENDPOINT}?api_key=${API_KEY}`);
}

export { fetchDayTrends };
