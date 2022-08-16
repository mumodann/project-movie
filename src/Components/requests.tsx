const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${
    import.meta.env.VITE_MOVIE_API
  }db&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${
    import.meta.env.VITE_MOVIE_API
  }db&language=en-US&page=1`,
  requestUpComing: `https://api.themoviedb.org/3/movie/upcoming?api_key=${
    import.meta.env.VITE_MOVIE_API
  }db&language=en-US&page=1`,
  requestAction: `https://api.themoviedb.org/3/discover/movie?api_key=${
    import.meta.env.VITE_MOVIE_API
  }db&with_genres=28`,
  requestComedy: `https://api.themoviedb.org/3/discover/movie?api_key=${
    import.meta.env.VITE_MOVIE_API
  }db&with_genres=35`,
  requestHorror: `https://api.themoviedb.org/3/discover/movie?api_key=${
    import.meta.env.VITE_MOVIE_API
  }db&with_genres=27`,
  requestRomance: `https://api.themoviedb.org/3/movie/upcoming?api_key=${
    import.meta.env.VITE_MOVIE_API
  }db&language=en-US&page=1`,
};

export default requests;
