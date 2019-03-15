# LateRooms Group FE Kata

An online version of this project is hosted here: 

http://cohesive.dev/lrgk-hotels/hosted

## Running locally

_Prerequisite: run `yarn` to install all project dependencies._

Project is split into 2 parts:

1. Mock REST API, which is a façade remote data source.
    - Start this with `yarn mock-api`
    - This will spin up the mock API at http://localhost:3001 
    
2. Frontend, which displays and filters data.
    - Start this in development mode with `yarn watch`
    - Go to http://localhost:3000

Start both to run the project!

## Running tests

`yarn test` will run all tests within the codebase, and report on coverage can be found in `coverage/index.html`.

- Most important bits to test are where data is being manipulated or otherwise transformed for later consumption
- Least important bits to test are the areas of glue code or code that is easily tested by a simple smoke test / run through of
the happy path

## Creating a production build

`yarn build` will generate the production HTML and JS resources

This project can also run its mock API on the Heroku PaaS, just create a new
pipeline, add an app and point the pipeline to this repo, the `Procfile` is
preset and ready to use. 