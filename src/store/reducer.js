import {combineReducers} from "redux-immutable"

import { reducer as recommendReducer } from '../pages/discover/child-pages/recommend/store'

export default combineReducers({
  recommend: recommendReducer
})
