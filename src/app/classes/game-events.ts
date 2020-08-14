import { TilemapPosition } from "src/app/classes/utilities";

export interface GameEvent {

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