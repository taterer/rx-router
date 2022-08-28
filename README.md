# rx-router
Taking you places in the browser, or the other way around.

## Install
`yarn add @taterer/rx-router`

or

`npm i --save @taterer/rx-router`

## Why?
When you need to update the app based on the URL.

## Configuration
BASE_URL environment variable can be used to configure the base path for routes.

Example .env if hosting on GitHub:
```
BASE_URL=/rx-router
```

## How to use
Ensure the history is subscribed to
```
import { subscribeToHistory } from '@taterer/rx-router'

subscribeToHistory()
```
Then use pushHistory and replaceHistory whenever navigating within the app
```
import { pushHistory, replaceHistory } from '@taterer/rx-router'

pushHistory({ url: '/somewhere' })

replaceHistory({ url: '/somewhere' })
```
