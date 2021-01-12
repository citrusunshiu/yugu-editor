import { TilemapPosition } from "src/app/classes/utilities";

// classes
/**
 * 
 */
export interface CutsceneEditor {
    id: number;
}

/**
 * Contains data used for running in-game cutscenes. 
 * @version 0.0.1
 */
interface Cutscene {

    /** 
     * The version of the JSON object.
     * 
     * The version number should match up with the JSON Parser's version number in order to prevent data parsing issues.
     */
    version: 1;
    
    /**
     * The string database reference ID of the cutscene's name.
     */
    nameID: string;
    
    /** 
     * The list of all scenes contained in the cutscene.
     */
    scenes: Scene[];
}

/**
 * Contains data used for running in-game cutscenes.
 * @version 0.0.1
 */
interface Scene {

    /** 
     * The version of the JSON object.
     * 
     * The version number should match up with the JSON Parser's version number in order to prevent data parsing issues.
     */
    version: 1;

    /**
     * 
     */
    instanceJSONFileName: string;
    
    /**
     * 
     */
    geologyInformation: {

        /**
        * 
        */
        year: number;
        
        /**
        * 
        */
        season: string;
        
        /**
        * 
        */
        date: number;
        
        /**
        * 
        */
        time: string;
    };

    /**
     * 
     */
    isCinematic: boolean;

    /**
     * 
     */
    units: [
        {
            /**
             * 
             */
            unitJSONFileName: string;

            /**
             * 
             */
            unitPosition: TilemapPosition;
        }
    ];

    /**
     * 
     */
    sceneChoreographies: SceneChoreography[];
}

/**
 * 
 * @version 0.0.1
 */
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

/**
 * 
 * @version 0.0.1
 */
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