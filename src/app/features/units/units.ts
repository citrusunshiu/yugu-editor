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
    skills: [
        {
            skillJSONFileName: string;
            levelObtained: number;
            progressionPointObtained: number;
        }
    ]
    actions: [
        {
            className: string;
        }
    ]
    unitAIs: [
        {
            className: string;
        }
    ]
    unitAIFunctionName: string;
}