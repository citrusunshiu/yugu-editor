import { GameEvent } from "src/app/classes/game-events";
import { TilemapPosition } from "src/app/classes/utilities";

//classes
export interface InstanceEditor {
    id: number;
}

interface Instance {
    
    /** 
     * The version of the JSON object.
     * 
     * The version number should match up with the JSON Parser's version number in order to prevent data parsing issues.
     */
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
            unitJSONFileName: string;
            maxUnits: number;
            areaOfEffect: {
                xPos: number;
                yPos: number;
                zPos: number;
                radius: number;
            }
            unitLevel: number;
            unitSpawnTime: number;
        }
    ];
    gameEventMarkers?: [
        {
            position: TilemapPosition;
            gameEvents: GameEvent[];
        }
    ];
}