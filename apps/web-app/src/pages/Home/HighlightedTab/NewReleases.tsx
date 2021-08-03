
import * as React from 'react';
import List, { ListItem } from 'src/components/List';

const data: ListItem[] = [
  {
    id: '1',
    avatarUrl: "https://media.rawg.io/media/crop/600/400/games/1bb/1bb86c35ffa3eb0d299b01a7c65bf908.jpg",
    title: "Grand Theft Auto V",
    subTitle: 'Genre: Action, Adventure, RPG'
  },
  {
    id: '2',
    avatarUrl: "https://media.rawg.io/media/crop/600/400/games/1bb/1bb86c35ffa3eb0d299b01a7c65bf908.jpg",
    title: "Grand Theft Auto V",
    subTitle: 'Genre: Action, Adventure, RPG'
  },
  {
    id: '3',
    avatarUrl: "https://media.rawg.io/media/crop/600/400/games/1bb/1bb86c35ffa3eb0d299b01a7c65bf908.jpg",
    title: "Grand Theft Auto V",
    subTitle: 'Genre: Action, Adventure, RPG'
  },
  {
    id: '4',
    avatarUrl: "https://media.rawg.io/media/crop/600/400/games/1bb/1bb86c35ffa3eb0d299b01a7c65bf908.jpg",
    title: "Grand Theft Auto V",
    subTitle: 'Genre: Action, Adventure, RPG'
  },
]

const NewReleases: React.FC = () => {
  return (
    <List data={data}/>
  )
}

export default NewReleases;
