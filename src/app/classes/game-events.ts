import { TilemapPosition } from "src/app/classes/utilities";

export interface GameEvent {
    eventType: string;

    /**
     * Unique identifier for the game event.
     * 
     * Used to prevent repeated execution of the same game event, if necessary.
     */
    eventID: number;
}

export interface PlayCutsceneGameEvent extends GameEvent {
    cutsceneJSONFileName: string;
}

export interface ChangeDateGameEvent extends GameEvent {
    year: number;
    season: string;
    date: number;
    time: string;
}

export interface MoveLocationGameEvent extends GameEvent {
    instanceJSONFileName: string;
    position: TilemapPosition;
}