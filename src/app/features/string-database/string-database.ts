// classes

export interface StringDatabaseEditor {
    id: number;
    currentQuery: string;
    queryResults: StringDatabaseEntry[];
    editedEntries: StringDatabaseEntry[];
    newEntry: StringDatabaseEntry;
    stringDatabaseEntrySelection: StringDatabaseEntry[];
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
 * Reducer for string-database.
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
                databasePath: action.payload
            };
        default: 
            return state;
      }
}

// action types, actions, action creators
export type StringDatabaseActionTypes = 
    OpenStringDatabaseAction | 
    LoadEntriesAction | 
    InsertEntryAction |
    EditEntryAction |
    SelectEntryAction |
    DeleteEntriesAction;

export const OPEN_STRING_DATABASE = 'yugu-editor/string-database/OPEN_STRING_DATABASE';

interface OpenStringDatabaseAction {
    type: typeof OPEN_STRING_DATABASE;
    payload: string;
    error: any;
    meta: any;
}

/**
 * 
 * @param databasePath 
 */
export function openStringDatabase(databasePath: string): OpenStringDatabaseAction {
    return {
        type: OPEN_STRING_DATABASE,
        payload: databasePath,
        error: null,
        meta: null
    };
}

export const LOAD_ENTRIES = 'yugu-editor/string-database/LOAD_ENTRIES';

interface LoadEntriesAction {
    type: typeof LOAD_ENTRIES;
    payload: {
        editorId: number;
        currentQuery: string
    };
    error: any;
    meta: any;
}

/**
 * 
 * @param databaseQuery 
 */
export function loadEntries(editorId: number, databaseQuery: string): LoadEntriesAction {
    return {
        type: LOAD_ENTRIES,
        payload: {
            editorId: editorId,
            currentQuery: databaseQuery
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
        entryId: number};
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