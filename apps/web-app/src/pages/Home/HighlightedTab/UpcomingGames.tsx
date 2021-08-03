
import * as React from 'react';
import List, { ListItem } from 'src/components/List';

const data: ListItem[] = [
  {
    id: '1',
    avatarUrl: "https://media.rawg.io/media/resize/640/-/games/af2/af2b640fa820e8a8135948a4cd399539.jpg",
    title: "Battlefield 2042",
    subTitle: 'Genre: Shooter, Action'
  },
  {
    id: '2',
    avatarUrl: "https://media.rawg.io/media/resize/640/-/games/af2/af2b640fa820e8a8135948a4cd399539.jpg",
    title: "Battlefield 2042",
    subTitle: 'Genre: Shooter, Action'
  },
  {
    id: '3',
    avatarUrl: "https://media.rawg.io/media/resize/640/-/games/af2/af2b640fa820e8a8135948a4cd399539.jpg",
    title: "Battlefield 2042",
    subTitle: 'Genre: Shooter, Action'
  },
  {
    id: '4',
    avatarUrl: "https://media.rawg.io/media/resize/640/-/games/af2/af2b640fa820e8a8135948a4cd399539.jpg",
    title: "Battlefield 2042",
    subTitle: 'Genre: Shooter, Action'
  },
]

const UpcomingGames: React.FC = () => {
  return (
    <List data={data}/>
  )
}

export default UpcomingGames;
