import { GameEvent } from "src/app/classes/game-events";
import { TilemapPosition } from "src/app/classes/utilities";

//classes
export interface QuestEditor {
    id: number;
}

interface Quest {
    version: 1;
    nameID: string;
}

interface QuestPart {
    version: 1;
    partType: string;
    onStartGameEvents: GameEvent[];
    onFinishGameEvents: GameEvent[];
}

interface ReachDateQuestPart extends QuestPart {
    version: 1;
    year: number;
    
    /**
     * Leave blank to specify no season requirement.
     */
    season: string;
    
    /**
     * Leave blank to specify no date requirement.
     */
    date: number;

    /**
     * Leave blank to specify no time requirement.
     */
    time: string;
}

interface ReachAreaQuestPart extends QuestPart {
    version: 1;
    provinceName: string;
    districtName: string;
    areaName: string;
    instanceJSONFileName: string;
}

interface ReachAreaCheckpointQuestPart extends QuestPart {
    version: 1;
    geographyName: string;
    positions: TilemapPosition[];
}

interface DefeatUnitsQuestPart extends QuestPart {
    version: 1;
    unitJSONFileName: string;
    defeatCount: number;   
}

interface InteractUnitQuestPart extends QuestPart {
    version: 1;
    unitJSONFileName: string;
}