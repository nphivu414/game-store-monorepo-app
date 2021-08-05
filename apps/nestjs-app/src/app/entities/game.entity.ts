import { Expose, Type } from 'class-transformer'

export class GameEntity {
  id: number
  name?: string
  @Expose({ name: 'background_image' })
  backgroundImage?: string
  rating?: number
  platforms?: Platform[]
}

export class Platform {
  platform: PlatformDetails
  released_at?: string
}

export class PlatformDetails {
  id: number
  name?: string
  slug?: string
  image?: string
  year_end?: number
  year_start?: number
  games_count?: number
  image_background?: string
}

export class RawgGameResponse {
  count: number
  next: string
  previous: string
  @Type(() => GameEntity)
  results: GameEntity[]
}
