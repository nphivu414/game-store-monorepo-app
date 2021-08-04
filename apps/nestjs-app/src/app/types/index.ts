export interface RawgGameResponse {
  count: number;
  next: string;
  previous: string;
  results: GameEntity[];
}

export interface GameEntity {
  id: number
  name?: string
  background_image?: string
  rating?: number,
  platforms?: Platform[]
}

export interface PlatformDetails {
  id: number,
  name?: string,
  slug?: string,
  image?: string,
  year_end?: number,
  year_start?: number,
  games_count?: number,
  image_background?: string
}

export interface Platform {
  platform: PlatformDetails,
  released_at?: string
}
