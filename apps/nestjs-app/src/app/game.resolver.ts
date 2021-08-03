import { Query, Resolver } from '@nestjs/graphql';

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

@Resolver('Game')
export class GameResolver {
  private games: GameEntity[] = [
    {
      id: 1,
      name: 'Voltron',
    },
    {
      id: 2,
      name: 'Ship in a Bottle',
    }
  ];

  @Query('allGames')
  getAllSets(): GameEntity[] {
    return this.games;
  }
}
