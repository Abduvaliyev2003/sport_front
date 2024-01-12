import { createStore, applyMiddleware } from "redux";
import storeReduser from './reduser/storeReduser'
import { logger }  from "redux-logger";
export default createStore(storeReduser, applyMiddleware( logger))
