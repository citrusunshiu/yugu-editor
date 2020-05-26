import { combineReducers } from 'redux'
import stringDatabaseReducer from 'src/app/features/string-database/string-database';

export default combineReducers({
    stringDatabase: stringDatabaseReducer,
})