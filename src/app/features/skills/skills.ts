//classes
export interface SkillEditor {
    id: number;
}

interface Skill {
    version: 1;
    nameID: string;
    descriptionID: string;
    longDescriptionID: string;
    iconFileName: string;
    targetType: string;
    encounterSkillType: string;
    aiSkillCategory: string;
    costs?: [
        {
            resource: string;
            value: number;
        }
    ];
    cooldown: number;
    hits: Hit[];
    skillChoreographies: SkillChoreography[];
    skillFunctionName: string;
}

interface Hit {
    version: 1;
    nameID: string;
    damageModifier: number;
    aggroModifier: number;
    attributes: number[];
    statuses?: [
        {
            statusJSONFileName: string;
            procChance: number;
        }
    ]
}

interface SkillChoreography {
    version: 1;
    nameID: string;
    animationPatternIndex: number;
    totalFrames: number;
    isAttackSpeedDependent: boolean;
    hitboxGroups: [
        {
            delayFrames?: number; //rm this soon
            indicatorStartFrame: number;
            activationFrame: number;
            lingerFrames: number;
            hitboxes: [
                {
                    xPos: number;
                    yPos: number;
                }
            ]
            hitFunctionName: string;
            hitIndex: number;
        }
    ]
}