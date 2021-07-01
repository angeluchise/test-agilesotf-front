export const config = {
  api: 'http://161.35.140.236:9005/api/',
  endpoints: {
    login: 'auth/login',
    refresh: 'auth/refresh',
    movies: 'movies/',
    now_playing: 'now_playing',
    popular: 'popular',
    actors: 'actors'
  },
  router: {
    login: '',
    home: 'home'
  },
  localToken: 'token',
  localRefresh: 'refresh',
  localUser: 'user'
};