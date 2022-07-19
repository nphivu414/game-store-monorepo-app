
![Logo](https://github.com/nphivu414/game-store-monorepo-app/blob/7ddad62ae62de05ee2b6b45c0f30b9669c25f542/game-store.jpg)

    
# Game Store Monorepo

A full-stack web/mobile application that helps you find and discover over 500,000+ video games on your device. Powered by RAWG API.


## Authors

- [@nphivu414](https://github.com/nphivu414)

## Main stacks
 - [Nx](https://nx.dev/)
 - [Typescript](https://www.typescriptlang.org/)
 - [ReactJS](https://reactjs.org/)
 - [TailwindCSS](https://tailwindcss.com/)
 - [DaisyUI](https://daisyui.com/)
 - [NestJS](https://nestjs.com/)
 - [Apollo GraphQL](https://www.apollographql.com/)
 - [RAWG Video Games Database API](https://rawg.io/apidocs)



## Screenshots

|  |  |  |  |
| :-------- | :------- | :------------------------- | :------------------------- |
| ![App Screenshot](https://github.com/nphivu414/game-store-monorepo-app/blob/master/assets/mono-game-store1.png) | ![App Screenshot](https://github.com/nphivu414/game-store-monorepo-app/blob/master/assets/mono-game-store2.png) | ![App Screenshot](https://github.com/nphivu414/game-store-monorepo-app/blob/master/assets/mono-game-store3.png) | ![App Screenshot](https://github.com/nphivu414/game-store-monorepo-app/blob/master/assets/mono-game-store4.png) |

  
## Demo

[Check out the live demo](https://mono-game-store.netlify.app/)

  
## Installation

1. Clone the repo
   ```sh
   git clone https://github.com/nphivu414/game-store-monorepo-app.git
   ```
2. Install dependencies
   ```sh
   yarn install
   ```
    
## Run Locally

1. Go to the project directory

```bash
  cd game-store-monorepo-app
```

2. Start the NodeJS server

```bash
  yarn start:backend
```

3. Start the ReactJS web app

```bash
  yarn start:web
```

4. Start exploring GraphQL Playground at http://localhost:3333/graphql and Game Store Web App at http://localhost:4200/
## GRAPHQL API Reference

#### Get a list of games


```
query allGames {
    allGames(page: 1, pageSize: 5) {
        nextPage
        results {
            id
            name
            backgroundImage
            rating
        }
    }
}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `page` | `number` | A page number within the paginated result set. |
| `pageSize` | `number` | Number of results to return per page. |
| `date` | `string` | Filter by a release date, for example: `2010-01-01,2018-12-31`. |
| `genres` | `string` | Filter by genres, for example: `4,51` or `action,indie`. |
| `tags` | `string` | Filter by tags, for example: `31,7` or `singleplayer,multiplayer`. |
| `publishers` | `string` | Filter by publishers, for example: `354,20987` or `electronic-arts,microsoft-studios`. |
| `search` | `string` | Search by names |

#### Get a list of games that are part of the same series.

```
query gameSeries {
    gameSeries(page: 1, pageSize: 5) {
        nextPage
        results {
            id
            name
            backgroundImage
            rating
        }
    }
}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `page` | `number` | A page number within the paginated result set. |
| `pageSize` | `number` | Number of results to return per page. |
| `id` | `number` | Game ID. |

#### Get details of the game.

```
query gameDetails {
    gameDetails(id: 3498) {
        id
        name
        backgroundImage
        rating
        platforms {
            platform {
            id
            name
            image
            imageBackground
            }
            releasedAt
        }
    }
}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `number` | Game ID. |

#### Get a list of video game genres.

```
query allGenres {
    allGenres(page: 1, pageSize: 10) {
        nextPage
        results {
            id
            name
            thumbnailImage
            games {
                id
                name
            }
        }
    }
}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `page` | `number` | A page number within the paginated result set. |
| `pageSize` | `number` | Number of results to return per page. |

#### Get a list of video game tags.

```
query allTags {
    allTags(page: 1, pageSize: 10) {
        nextPage
        results {
            id
            name
            thumbnailImage
            games {
                id
                name
            }
        }
    }
}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `page` | `number` | A page number within the paginated result set. |
| `pageSize` | `number` | Number of results to return per page. |

#### Get a list of video game publishers.

```
query allPublishers {
    allPublishers(page: 1, pageSize: 10) {
        nextPage
        results {
            id
            name
            thumbnailImage
            games {
                id
                name
            }
        }
    }
}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `page` | `number` | A page number within the paginated result set. |
| `pageSize` | `number` | Number of results to return per page. |

  
