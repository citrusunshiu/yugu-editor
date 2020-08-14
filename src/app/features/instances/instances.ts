import { GameEvent } from "src/app/classes/game-events";
import { TilemapPosition } from "src/app/classes/utilities";

//classes
export interface InstanceEditor {
    id: number;
}

interface Instance {
    version: 1;
    nameID: string;
    geographyName: string;
    province: string;
    district: string;
    area: string;
    instanceCoordinates: {
        xPos: number;
        yPos: number;
        zPos: number;
    };
    isHostile: boolean;
    loadingZones: [
        {
            instanceJSONFileName: string;
            position: TilemapPosition;
            playerUnitSpawnPosition: TilemapPosition;
        }
    ];
    weather: [
        {

        }
    ];
    unitSpawners?: [
        {

        }
    ];
    gameEventMarkers?: [
        {
            position: TilemapPosition;
            gameEvents: GameEvent[];
        }
    ];
}