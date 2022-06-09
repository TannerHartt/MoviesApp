export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  budget: number;
  genres: Genre[];
  belongs_to_collection: boolean;
  imdb_id: string;
  media_type: string;
}

export interface MovieDto {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface MovieVideoDto {
  id: number;
  results: MovieVideo[];
}

export interface MovieVideo {
  site: string;
  key: string;
}

export interface MovieImages {
  backdrops: {
    file_path: string;
  }[];
}

export interface MovieCredits {
  cast: {
    name: string;
    profile_path: string;
  }[];
}

export interface MovieRecommendations {
  page: number;
  results: Movie[];
}

export interface MovieReviews {
  id: number;
  page: number;
  results: ReviewsDto[];
  total_pages: number;
  total_results: number;
}

export interface ReviewsDto {
  author: string;
  author_details: AuthorDto[];
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}

export interface AuthorDto {
  name: string;
  username: string;
  avatar_path: string;
  rating: number;
}

export interface TvImages {
  backdrops: {
    aspect_ratio: number;
    file_path: string;
    height: number;
    iso_639_1: boolean;
    vote_average: number;
    vote_count: number;
    width: number;
  }[];

  id: number;

  posters: {
    aspect_ratio: number,
    file_path: string;
    height: number;
    iso_639_1: string;
    vote_average: number;
    vote_count: number;
    width: number;
  }[];
}

export interface TvShowDto {
  page: number;
  results: TvShow[];
  total_results: number;
  total_pages: number;
}

export interface TvShow {
  backdrop_path: string;
  first_air_date: string;
  id: number;
  name: string;
  origin_country: string;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  adult: boolean;
  episode_run_time: number;
  in_production: boolean;
  number_of_episodes: number;
  number_of_seasons: number;
  last_air_date: string;
  status: string;
  tagline: string;
  genres: Genre[];
  episode_number: number;
  season_number: number;
  last_episode_to_air: {
    air_date: string;
    episode_number: number;
    id: number;
    name: string;
    overview: string;
    runtime: number;
    season_number: number;
    still_path: string;
    vote_average: number;
    vote_count: number;
    production_code: string;
  };
  next_episode_to_air: {
    air_date: string;
    episode_number: number;
    id: number;
    name: string;
    overview:string;
    production_code: string;
    runtime: string;
    season_number: string
    still_path: string;
    vote_average: string;
    vote_count: string;
  };

  networks: {
      name: string;
      id: number;
      logo_path: string;
      origin_country: string;
  }[];
  production_companies: {
      id: number;
      logo_path: string;
      name: string;
      origin_country: string;
  }[];
}
