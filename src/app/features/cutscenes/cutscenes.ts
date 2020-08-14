import { TilemapPosition } from "src/app/classes/utilities";

// classes
export interface CutsceneEditor {
    id: number;
}

interface Cutscene {
    version: 1;
    nameID: string;
    scenes: Scene[];
}

interface Scene {
    version: 1;
    instanceJSONFileName: string;
    geologyInformation: {
        year: number;
        season: string;
        date: number;
        time: string;
    };
    isCinematic: boolean;
    units: [
        {
            unitJSONFileName: string;
            unitPosition: TilemapPosition;
        }
    ];
    sceneChoreographies: SceneChoreography[];
}

interface SceneChoreography {
    version: 1;
    dialogue: {
        speakerID: string;
        textID: string;
        portraitFileName: string;
        portraitEmote: number;
    };

    /**
     * 
     */
    animations: SceneAnimation[];
}

interface SceneAnimation {
    version: 1;
    unitName: string;
    unitIndex: number;
    moveToTile: TilemapPosition;
    animationIndex: number;
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