//classes
export interface SkillEditor {
    id: number;
}

interface Skill {
    version: 1;
    nameID: string;
    summaryID: string;
    descriptionID: string;
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
            duration: number;
        }
    ]
}

interface SkillChoreography {
    version: 1;
    nameID: string;
    animationPatternIndex: number;
    //skillChoreographyAnimationScript: string;
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