//classes
export interface UnitEditor {
    id: number;
}

interface Unit {
    version: 1;
    nameID: string;
    animationScriptJSONFileName: string;
    role: string;
    classification: string;
    speedTier: string;
    baseMovementFrames: number;
    baseDescentFrames: number;
    baseAscentFrames: number;
    skillResources: [
        {
            resource: string;
            maxValue: number;
        }
    ];
    hpScaling: number;
    mpScaling: number;
    mpRegenScaling: number;
    physicalAttackScaling: number;
    magicalAttackScaling: number;
    physicalDefenseScaling: number;
    magicalDefenseScaling: number;
    speedScaling: number;
    staggerThresholdScaling: number;
    expYield: number;
    dropTable: [
        {
            itemJSONFileName: string;
            dropChance: number; // 1 = 100%; 0.1 = 10%; 0.01 = 1%; ...
        }
    ];
    skills: [
        {
            skillJSONFileName: string;
            levelObtained: number;
            progressionPointObtained: number;
        }
    ];
    actions: [
        {
            className: string;
        }
    ];

    unitAIs: [
        {
            /**
             * The full name of the class that will determine the unit's AI.
             */
            className: string;
        }
    ];
    //unitAIClassName: string;
}