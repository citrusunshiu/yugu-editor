//const sqlite3 = require('sqlite3').verbose();

// classes

export interface StringDatabaseEditor {
    id: number;
    currentQuery: string;
    queryResults: StringDatabaseEntry[];
    editedEntries: StringDatabaseEntry[];
    newEntry: StringDatabaseEntry;
    stringDatabaseEntrySelectionIds: number[];
}

interface StringDatabaseEntry {
    id: number;
    textId: string;
    text: string;
    speaker: string;
}

// state
interface StringDatabaseState {
    databasePath: string;
    stringDatabaseEditors: StringDatabaseEditor[];
}

const initialState: StringDatabaseState = {
    databasePath: "",
    stringDatabaseEditors: []
}

// reducer
/**
 * @summary Reducer for string-database.
 * @param state the current state.
 * @param action the action being passed to alter the state.
 */
export default function reducer(
    state = initialState, 
    action: StringDatabaseActionTypes
): StringDatabaseState {
    switch (action.type) {
        case OPEN_STRING_DATABASE:
            return {
                ...state,
                databasePath: action.payload.databasePath
            };

        case LOAD_ENTRIES_REQUEST:
            var stringDatabaseEditors: StringDatabaseEditor[] = state.stringDatabaseEditors;
            stringDatabaseEditors[action.payload.editorId].currentQuery = action.payload.currentQuery;

            return {
                ...state,
                stringDatabaseEditors: stringDatabaseEditors
            };

        case LOAD_ENTRIES:
            var stringDatabaseEditors: StringDatabaseEditor[] = state.stringDatabaseEditors;

            stringDatabaseEditors[action.payload.editorId].queryResults = action.payload.queryResults;

            return {
                ...state,
                stringDatabaseEditors: stringDatabaseEditors
            };

        case INSERT_ENTRY_REQUEST:
            return {
                ...state
            };
            
        case INSERT_ENTRY:
            return {
                ...state
            };

        case EDIT_ENTRY_REQUEST:
            return {
                ...state
            };

        case EDIT_ENTRY:
            return {
                ...state
            };

        case SELECT_ENTRY:
            var stringDatabaseEditors: StringDatabaseEditor[] = state.stringDatabaseEditors;

            stringDatabaseEditors[action.payload.editorId].stringDatabaseEntrySelectionIds.push(action.payload.entryId);
            
            return {
                ...state,
                stringDatabaseEditors: stringDatabaseEditors
            };

        case DESELECT_ENTRY:
            var stringDatabaseEditors: StringDatabaseEditor[] = state.stringDatabaseEditors;

            stringDatabaseEditors[action.payload.editorId].stringDatabaseEntrySelectionIds.splice(action.payload.deselectionIndex, 1);

            return {
                ...state,
                stringDatabaseEditors: stringDatabaseEditors
            };

        case DELETE_ENTRIES_REQUEST:
            return {
                ...state
            };

        case DELETE_ENTRIES:
            return {
                ...state
            };
        default: 
            return state;
      }
}

/**
function sqliteQuery(editorId: number, databasePath:string, query:string){
    return function (){
    //dispatch async started action
    loadEntriesRequest(editorId, query);

    var db = new sqlite3.Database(databasePath);
    db.all(query, function(err:any, rows:any){
        if(err){
            console.log(err);
        }

        var results: StringDatabaseEntry[] = [{
            id: 0,
            textId: '',
            text: '',
            speaker: ''
        }]

        results.splice(0, 1);

        rows.forEach((row:any) => {
            var result: StringDatabaseEntry = {
                id: row.id,
                textId: row.textId,
                text: row.text,
                speaker: row.speaker
            };

            results.push(result);
        });
        
        //dispatch async ended action, w/ results
        loadEntries(editorId, results);
    });
    }
}
 */

function sqliteInsert(){
    return function(){

    }
}

function sqliteEdit(){
    return function(){
        
    }
}

function sqliteDelete(){
    return function(){
        
    }
}

// action types, actions, action creators
export type StringDatabaseActionTypes = 
    OpenStringDatabaseAction | 
    LoadEntriesRequestAction |
    LoadEntriesAction | 
    InsertEntryRequestAction |
    InsertEntryAction |
    EditEntryRequestAction |
    EditEntryAction |
    SelectEntryAction |
    DeselectEntryAction |
    DeleteEntriesRequestAction |
    DeleteEntriesAction;

export const OPEN_STRING_DATABASE = 'yugu-editor/string-database/OPEN_STRING_DATABASE';

interface OpenStringDatabaseAction {
    type: typeof OPEN_STRING_DATABASE;
    payload: {
        databasePath: string;
    };
    error: any;
    meta: any;
}

/**
 * Sets the SQLite database to be queried from.
 * @param databasePath the path of the SQLite database.
 */
export function openStringDatabase(databasePath: string): OpenStringDatabaseAction {
    return {
        type: OPEN_STRING_DATABASE,
        payload: {
            databasePath: databasePath
        },
        error: null,
        meta: null
    };
}

export const LOAD_ENTRIES_REQUEST = 'yugu-editor/string-database/LOAD_ENTRIES_REQUEST';

interface LoadEntriesRequestAction {
    type: typeof LOAD_ENTRIES_REQUEST;
    payload: {
        editorId: number;
        currentQuery: string;
    };
    error: any;
    meta: any;
}

/**
 * 
 * @param databaseQuery 
 */
export function loadEntriesRequest(editorId: number, databaseQuery: string): LoadEntriesRequestAction {
    return {
        type: LOAD_ENTRIES_REQUEST,
        payload: {
            editorId: editorId,
            currentQuery: databaseQuery
        },
        error: null,
        meta: null
    };
}

export const LOAD_ENTRIES = 'yugu-editor/string-database/LOAD_ENTRIES';

interface LoadEntriesAction {
    type: typeof LOAD_ENTRIES;
    payload: {
        editorId: number;
        queryResults: StringDatabaseEntry[];
    };
    error: any;
    meta: any;
}

/**
 * 
 * @param editorId 
 * @param queryResults 
 */
export function loadEntries(editorId: number, queryResults: StringDatabaseEntry[]): LoadEntriesAction {
    return {
        type: LOAD_ENTRIES,
        payload: {
            editorId: editorId,
            queryResults: queryResults
        },
        error: null,
        meta: null
    };
}

export const INSERT_ENTRY_REQUEST = 'yugu-editor/string-database/INSERT_ENTRY_REQUEST';

interface InsertEntryRequestAction {
    type: typeof INSERT_ENTRY_REQUEST;
    payload: {
        
    };
    error: any;
    meta: any;
}

export function insertEntryRequest(): InsertEntryRequestAction {
    return {
        type: INSERT_ENTRY_REQUEST,
        payload: {
            
        },
        error: null,
        meta: null
    };
}

export const INSERT_ENTRY = 'yugu-editor/string-database/INSERT_ENTRY';

interface InsertEntryAction {
    type: typeof INSERT_ENTRY;
    payload: {
        editorId: number;
        entry: StringDatabaseEntry;
    };
    error: any;
    meta: any;
}

/**
 * 
 * @param entry 
 */
export function insertEntry(editorId: number, entry: StringDatabaseEntry): InsertEntryAction {
    return {
        type: INSERT_ENTRY,
        payload: {
            editorId: editorId,
            entry: entry
        },
        error: null,
        meta: null
    };
}


export const EDIT_ENTRY_REQUEST = 'yugu-editor/string-database/EDIT_ENTRY_REQUEST';

interface EditEntryRequestAction {
    type: typeof EDIT_ENTRY_REQUEST;
    payload: {
        
    };
    error: any;
    meta: any;
}

export function editEntryRequest(): EditEntryRequestAction {
    return {
        type: EDIT_ENTRY_REQUEST,
        payload: {
            
        },
        error: null,
        meta: null
    };
}

export const EDIT_ENTRY = 'yugu-editor/string-database/EDIT_ENTRY';

interface EditEntryAction {
    type: typeof EDIT_ENTRY;
    payload: {
        editorId: number;
        entry: StringDatabaseEntry;
    };
    error: any;
    meta: any;
}

/**
 * 
 * @param entry 
 */
export function editEntry(editorId: number, entry: StringDatabaseEntry): EditEntryAction {
    return {
        type: EDIT_ENTRY,
        payload: {
            editorId: editorId,
            entry: entry
        },
        error: null,
        meta: null
    };
}

export const SELECT_ENTRY = 'yugu-editor/string-database/SELECT_ENTRY';

interface SelectEntryAction {
    type: typeof SELECT_ENTRY;
    payload: {
        editorId: number;
        entryId: number;
    };
    error: any;
    meta: any;
}

/**
 * 
 * @param entry 
 */
export function selectEntry(editorId: number, entryId: number): SelectEntryAction {
    return {
        type: SELECT_ENTRY,
        payload: {
            editorId: editorId,
            entryId: entryId
        },
        error: null,
        meta: null
    };
}

export const DESELECT_ENTRY = 'yugu-editor/string-database/DESELECT_ENTRY';

interface DeselectEntryAction {
    type: typeof DESELECT_ENTRY;
    payload: {
        editorId: number;
        deselectionIndex: number;
    };
    error: any;
    meta: any;
}

export const DELETE_ENTRIES_REQUEST = 'yugu-editor/string-database/DELETE_ENTRIES_REQUEST';

interface DeleteEntriesRequestAction {
    type: typeof DELETE_ENTRIES_REQUEST;
    payload: {
        
    };
    error: any;
    meta: any;
}

export function deleteEntriesRequest(): DeleteEntriesRequestAction {
    return {
        type: DELETE_ENTRIES_REQUEST,
        payload: {
            
        },
        error: null,
        meta: null
    };
}

export const DELETE_ENTRIES = 'yugu-editor/string-database/DELETE_ENTRIES';

interface DeleteEntriesAction {
    type: typeof DELETE_ENTRIES;
    payload: number;
    error: any;
    meta: any;
}

/**
 * 
 * 
 */
export function deleteEntries(editorId: number): DeleteEntriesAction {
    return {
        type: DELETE_ENTRIES,
        payload: editorId,
        error: null,
        meta: null
    };
}

// other