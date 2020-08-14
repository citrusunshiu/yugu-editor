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
    overworldAIs: [
        {
            className: string;
        }
    ]
    unitAIs: [
        {
            unitAIFunctionName: string;
        }
    ]
}