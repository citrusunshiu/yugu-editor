// state
interface StringDatabaseState {
    databasePath: string;
}

const initialState: StringDatabaseState = {
    databasePath: "",
}

// reducer
/**
 * Reducer for string-database.
 * @param state the current state.
 * @param action the action being passed to alter the state.
 */
export default function reducer(
    state = initialState, 
    action: StringDatabaseActionTypes
): StringDatabaseState {
    switch (action.type) {
        case SET_STRING_DATABASE:
            return {
                ...state,
                databasePath: action.payload
            };
        default: 
            return state;
      }
}

// action types, actions, action creators
export type StringDatabaseActionTypes = SetStringDatabaseAction /* | others... */;

export const SET_STRING_DATABASE = 'yugu-editor/string-database/SET_STRING_DATABASE';

interface SetStringDatabaseAction {
    type: typeof SET_STRING_DATABASE;
    payload: string;
    error: any;
    meta: any;
}

/**
 * 
 * @param databasePath 
 */
export function setStringDatabase(databasePath: string){
    return {
        type: SET_STRING_DATABASE,
        payload: databasePath
    };
}

// classes

// other