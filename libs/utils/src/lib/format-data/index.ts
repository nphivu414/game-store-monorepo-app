import { Genre, Platform } from '@game-store-monorepo/data-access';

export const getMultiplePlatformNames = (platforms?: Platform[], amount?: number): string => {
  if (!platforms) {
    return '';
  }
  const platformNames = platforms.map((platform) => platform.platform.name);
  if (!amount) {
    return platformNames.join(', ');
  }
  return platformNames.splice(0, amount).join(', ');
};

export const getMultipleGenreNames = (genres?: Genre[], amount?: number): string => {
  if (!genres) {
    return '';
  }
  const genreNames = genres.map((genre) => genre.name);
  if (!amount) {
    return genreNames.join(', ');
  }
  return genreNames.splice(0, amount).join(', ');
};
