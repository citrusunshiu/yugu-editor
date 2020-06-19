// classes
interface CutsceneEditor {
    id: number;
}

interface Cutscene {

}

interface Scene {

}

interface SceneChoreography {

}

interface SceneAnimation {
    
}

// state
interface CutsceneState {
    cutsceneFolderPath: string;
}

const initialState: CutsceneState = {
    cutsceneFolderPath: ''
}

// reducer
export default function reducer(
    state = initialState,
    action: CutsceneActionTypes
): CutsceneState {
    switch(action.type){
        case LOAD_CUTSCENE_DIRECTORY:
            return {
                ...state,
                cutsceneFolderPath: action.payload
            };
        default:
            return state;
    }
}

export type CutsceneActionTypes = LoadCutsceneDirectoryAction;

export const LOAD_CUTSCENE_DIRECTORY = 'yugu-editor/cutscenes/LOAD_CUTSCENE_DIRECTORY';

interface LoadCutsceneDirectoryAction {
    type: typeof LOAD_CUTSCENE_DIRECTORY;
    payload: string;
    error: any;
    meta: any;
}

export function loadCutsceneDirectory(cutsceneFolderPath: string): LoadCutsceneDirectoryAction {
    return {
        type: LOAD_CUTSCENE_DIRECTORY,
        payload: cutsceneFolderPath,
        error: null,
        meta: null
    };
}