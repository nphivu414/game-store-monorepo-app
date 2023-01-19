
<p align="center">
  <a href="https://mono-game-store.netlify.app/">
    <img src="https://github.com/nphivu414/game-store-monorepo-app/blob/7ddad62ae62de05ee2b6b45c0f30b9669c25f542/game-store.jpg"
         alt="Sponsored by Evil Martians">
  </a>
</p>

    
# Game Store Monorepo

A full-stack web/mobile application that helps you find and discover over 500,000+ video games on your device. Powered by RAWG API.
[Live demo](https://mono-game-store.netlify.app/)

## Authors

- [@nphivu414](https://github.com/nphivu414)

## Main stacks
 - [Nx Build System](https://nx.dev/)
 - [Typescript](https://www.typescriptlang.org/)
 - [ReactJS](https://reactjs.org/)
 - [React Native](https://reactnative.dev/)
 - [NestJS](https://nestjs.com/)
 - [Serverless](https://www.serverless.com/)
 - [AWS Lambda](https://aws.amazon.com/lambda/)
 - [Apollo GraphQL](https://www.apollographql.com/)
 - [TailwindCSS](https://tailwindcss.com/)
 - [DaisyUI](https://daisyui.com/)
 - [Styled Components](https://styled-components.com/)
 - [React Native Elements](https://github.com/react-native-elements/react-native-elements)
 - [Styled System](https://styled-system.com/)
 - [RAWG Video Games Database API](https://rawg.io/apidocs)



## Screenshots
 ### Web App
| Explore | Game Details | Games | Genres |
| :-------- | :------- | :------------------------- | :------------------------- |
| ![Web App Screenshot](https://github.com/nphivu414/game-store-monorepo-app/blob/master/assets/mono-game-store1.png) | ![Web App Screenshot](https://github.com/nphivu414/game-store-monorepo-app/blob/master/assets/mono-game-store2.png) | ![Web App Screenshot](https://github.com/nphivu414/game-store-monorepo-app/blob/master/assets/mono-game-store3.png) | ![Web App Screenshot](https://github.com/nphivu414/game-store-monorepo-app/blob/master/assets/mono-game-store4.png) |

  ### Native App
  | Android | iOS |
| :-------- | :------- |
| ![Android App Screenshot](https://github.com/nphivu414/game-store-monorepo-app/blob/master/assets/mono-game-store-android.png) | ![iOS App Screenshot](https://github.com/nphivu414/game-store-monorepo-app/blob/master/assets/mono-game-store-ios.png) |
  
## Installation

1. Clone the repo
   ```sh
   git clone https://github.com/nphivu414/game-store-monorepo-app.git
   ```
2. Install dependencies
   ```sh
   yarn install
   ```
3. Install serverless globally
   ```sh
   npm install -g serverless
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

4. Start the iOS app

- If you're not using M1, run 
```bash
   yarn start:ios:install
```

- If you're on M1, first install the x86 version of the ffi gem using ```sudo arch -x86_64 gem install ffi``` then run ```yarn start:ios:install:m1``` (see [here](https://github.com/CocoaPods/CocoaPods/issues/10723#issuecomment-864408657))

- Use yarn start:ios for subsequent starts (it's faster since it skips pod install and uses xcode's cache)

5. Start the Android app

- Run yarn start:android and the app should appear in the Android simulator

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

  
