function createHomeHeroMarkup({
  title,
  vote_average,
  overview,
  backdrop_path,
}) {
  return `
      <div class="back-drop-img-container">
        <img src="https://image.tmdb.org/t/p/original${backdrop_path}" alt="${title}" class="back-drop-img" />
      </div>
      <div class="home-hero-info">
        <h2 class="title home-hero-title">
        ${title}
        </h2>
        <div class="rating">
          ${vote_average}
        </div>
        <p class="home-hero-text film-overview">
          ${overview}
        </p>
      </div>
      <div class="home-hero-buttons-container">
        <button type="button" class="watch-trailer-btn">Watch trailer</button>
        <button type="button" class="more-details-btn">More details</button>
      </div>    
    `;
}

export { createHomeHeroMarkup };
