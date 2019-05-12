import React from "react"
import { AppRegistry } from "react-native"
import App from "./App"
import { name as appName } from "./app.json"
import { Provider } from "react-redux"
import promiseMiddleWare from "redux-promise"
import { createStore, applyMiddleware } from "redux"
import reducers from "./src/store/reducers"

const storeWithMiddleWare = applyMiddleware(promiseMiddleWare)(createStore)

const appRedux = () => {
  return (
    <Provider store={storeWithMiddleWare(reducers)}>
      <App />
    </Provider>
  )
}
AppRegistry.registerComponent(appName, () => appRedux)
